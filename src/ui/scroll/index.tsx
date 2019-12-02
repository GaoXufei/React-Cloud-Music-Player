import React, { forwardRef, useRef, useState, useEffect, useMemo, useImperativeHandle } from 'react'
import BScroll from 'better-scroll'
import { ScrollContainer, PullDownLoadingStyle } from './style'
import {
  PullUpLoadingStyle
} from './style'
import { debounce } from '@/utils'

interface InterfaceProps {
  direction?: string,
  click?: boolean,
  refresh?: boolean,
  onScroll?: any,
  pullUpLoading?: boolean,
  pullDownLoading?: boolean,
  pullUp?: (() => void) | null,
  pullDown?: (() => void) | null,
  bounceTop?: boolean,
  bounceBottom?: boolean,
  children?: any
}

const Scroll = forwardRef((props: any, ref: any) => {

  const [bScroll, setBScroll] = useState();

  const scrollContainerRef: any = useRef();

  const { direction, click, refresh, pullDownLoading, pullUpLoading, bounceBottom, bounceTop } = props;

  const { pullDown, pullUp, onScroll } = props;

  let pullUpDebounce = useMemo(() => debounce(pullUp, 300), [pullUp])
  let pullDownDebounce = useMemo(() => debounce(pullDown, 300), [pullDown])

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      },
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      }
    });

    setBScroll(scroll)
    return () => setBScroll(null);
  }, [scrollContainerRef, direction, click, bounceTop, bounceBottom])

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', (scroll: any) => onScroll(scroll))
  }, [bScroll, onScroll])

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    })
    return () => {
      bScroll.off('scrollEnd');
    }
  }, [pullUp, pullUpDebounce, bScroll])

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos: any) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    });
    bScroll.on('scroll', (pos: any) => {

    })
    return () => {
      bScroll.off('touchEnd');
    }
  }, [pullDown, pullDownDebounce, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  return (
    <ScrollContainer ref={scrollContainerRef}>
      <div>
        {pullDownLoading ? <PullUpLoadingComponent /> : null}
        {props.children}
        {!pullUpLoading ? <PullDownLoadingComponent /> : null}
      </div>
    </ScrollContainer>
  )
})

const PullUpLoadingComponent = () => {
  return (
    <PullUpLoadingStyle>
      <div className="wrapper">
        <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
        <div className="item4"></div>
        <div className="item5"></div>
      </div>
    </PullUpLoadingStyle>
  );
}

const PullDownLoadingComponent = () => {
  return (
    <PullDownLoadingStyle>
      <div className="wrapper">
        <div className="circle" />
      </div>
    </PullDownLoadingStyle>
  );
}



Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true,
  isLoading: false
};

export default Scroll;


