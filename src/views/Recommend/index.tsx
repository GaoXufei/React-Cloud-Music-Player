import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import * as actionsType from './store/actionCreators'
import { View } from './style'
import { Left } from '@/ui/transitions'
import Scroll from '@/ui/scroll'
import { forceCheck } from 'react-lazyload'
import { RecommendList } from '@/components/list'

// import components
import Swiper from '@/components/swiper'

// component
const Recommend: React.FC = (props: any) => {
  const { bannerList, recommendList } = props;
  const { getBannerDataDispatch, getRecommendDataDispatch } = props;
  useEffect(() => {
    if (!bannerList.size) getBannerDataDispatch();
    if (!recommendList.size) getRecommendDataDispatch();
    // eslint-disable-next-line
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <React.Fragment>
      <Left>
        <View>
          <Scroll onScroll={forceCheck}>
            <section>
              <Swiper bannerList={bannerListJS} />
              <RecommendList props={props} list={recommendListJS} title={`推荐歌单`} />
            </section>
          </Scroll>
        </View>
      </Left>
      {renderRoutes(props.route.routes)}
    </React.Fragment>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

// 映射dispatch到props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch: () => dispatch(actionsType.getBannerList()),
    getRecommendDataDispatch: () => dispatch(actionsType.getRecommendList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));