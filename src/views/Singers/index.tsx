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
  changePullUpLoading,
  changePullDownLoading,
  refreshMoreHotSingerList,
  refreshMoreSingerList
} from './store/actionCreators'
import { connect } from 'react-redux'
import { Loading } from '@/ui/transitions'
/**

 */
const Singers = (props: any) => {
  const scrollRef: any = useRef(null);
  const { singerList, category, alpha, enterLoading, pullUpLoading, pullDownLoading }: any = props;
  const { getHotSinger, updateCategroy, updateAlpha, pullUpRefresh, pullDownRefresh }: any = props;

  useEffect(() => {
    if (!singerList.size && !category && !alpha) getHotSinger();
    // eslint-disable-next-line
  }, [singerList, category, alpha])

  // 接收选中的参数
  const handleCategroyClick = (item: any) => {
    updateCategroy(item.key);
  }
  const handleAlphaClick = (item: any) => {
    updateAlpha(item.key)
  }
  // 上滑加载更多
  const handlePullUp = () => {
    pullUpRefresh(category === "")
  }
  // 下拉加载
  const handlePullDown = () => {
    pullDownRefresh()
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
            pullUpLoading={pullUpLoading}
            pullDownLoading={pullDownLoading}
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
          (item: any, index: number) => (
            <SingerItem key={`${item.accountId}${index}`}>
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
  pageCount: state.getIn(['singers', 'pageCount']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading'])
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
    },
    // 上滑加载更多
    pullUpRefresh: (hot: any) => {
      dispatch(changePullUpLoading(true));
      hot ? dispatch(refreshMoreHotSingerList()) : dispatch(refreshMoreSingerList());
    },
    // 下拉加载
    pullDownRefresh: (category: string, alpha: string) => {
      dispatch(changePullDownLoading(true))
      dispatch(changeListOffset(0));
      (category === "" && alpha === "") ? dispatch(getHotSingersList()) : dispatch(getSingersList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers);