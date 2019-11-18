import React, { useEffect, useRef } from 'react'
import { Left } from '@/ui/transitions'
import Scroll from '@/ui/scroll'
import { View, Nav, Main, SingerList, SingerItem } from './style'
import Horizen from './horizen'
import { categoryTypes, alphaTypes } from '@/api/config'
import LazyLoad, { forceCheck } from 'react-lazyload'
import {
  getHotSingersList,
  getSingersList,
  changeCategory,
  changeAlpha,
  changeListOffset,
  changeEnterLoading,
} from './store/actionCreators'
import { connect } from 'react-redux'
import { Loading } from '@/ui/transitions'
/**

 */
const Singers = (props: any) => {
  const scrollRef: any = useRef(null);
  const { singerList, category, alpha, enterLoading }: any = props;
  const { getHotSinger, updateCategroy, updateAlpha }: any = props;

  useEffect(() => {
    if (!singerList.size && !category && !alpha) getHotSinger();
    // eslint-disable-next-line
  }, [singerList, category, alpha])

  // 接收选中的参数
  const handleCategroyClick = (item: any) => {
    updateCategroy(item.key);
    scrollRef.current.refresh()
  }
  const handleAlphaClick = (item: any) => {
    updateAlpha(item.key)
    scrollRef.current.refresh()
  }
  // 上滑加载更多
  const handlePullUp = () => {
    console.log(scrollRef.current);
  }
  // 下拉加载
  const handlePullDown = () => {
    scrollRef.current.refresh()
  }

  return (
    <Left>
      <View>
        <Nav>
          <Horizen title="歌手类别:" list={categoryTypes} cls="categoryTypes" handleHorizenClick={handleCategroyClick} />
          <Horizen title="首字母:" list={alphaTypes} cls="alphaTypes" handleHorizenClick={handleAlphaClick} />
        </Nav>
        <Main>
          <Scroll
            ref={scrollRef}
            onScroll={forceCheck}
            pullUp={handlePullUp}
            pullDown={handlePullDown}
          >
            <RenderSingerList list={singerList.toJS()} />
          </Scroll>
        </Main>
        {enterLoading ? <Loading /> : null}
      </View>
    </Left>
  );
};

const RenderSingerList = ({ list }: any) => {
  return (
    <SingerList>
      {
        list.map(
          (item: any) => (
            <SingerItem key={item.id}>
              <div className="img-wrapper">
                <LazyLoad placeholder={<img src={require('@/assets/icon_user.png')} alt={"singer"} />}>
                  <img src={`${item.picUrl}?param=300x300`} alt={"singer"} />
                </LazyLoad>
              </div>
              <p>{item.name}</p>
            </SingerItem>)
        )
      }
    </SingerList>
  );
}

const mapStateToProps = (state: any) => ({
  alpha: state.getIn(['singers', 'alpha']),
  category: state.getIn(['singers', 'category']),
  listOffset: state.getIn(['singers', 'listOffset']),
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pageCount: state.getIn(['singers', 'pageCount'])
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHotSinger: () => dispatch(getHotSingersList()),
    updateCategroy: (keyword: any) => {
      dispatch(changeCategory(keyword));
      dispatch(changeListOffset(0));
      dispatch(changeEnterLoading(true));
      dispatch(getSingersList());
    },
    updateAlpha: (keyword: any) => {
      dispatch(changeAlpha(keyword));
      dispatch(changeListOffset(0));
      dispatch(changeEnterLoading(true));
      dispatch(getSingersList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers);