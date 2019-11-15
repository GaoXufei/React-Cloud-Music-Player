import React, { useEffect } from 'react'
import { Left } from '@/ui/transitions'
import Scroll from '@/ui/scroll'
import { View, Nav, Main, SingerList, SingerItem } from './style'
import Horizen from './horizen'
import { categoryTypes, alphaTypes } from '@/api/config'
import { forceCheck } from 'react-lazyload'
import { getHotSingersList } from './store/actionCreators'
import { connect } from 'react-redux'

const Singers = (props: any) => {

  const { singerList, category, alpha }: any = props;
  const { getHotSinger }: any = props;

  useEffect(() => {
    if (!singerList.size && !category && !alpha) getHotSinger();
    // eslint-disable-next-line
  }, [singerList, category, alpha])
  // 接收选中的参数
  const handleHorizenClick = (item: any) => {
    console.log(item);
  }

  return (
    <Left>
      <View>
        <Nav>
          <Horizen title="歌手类别:" list={categoryTypes} cls="categoryTypes" handleHorizenClick={handleHorizenClick} />
          <Horizen title="首字母:" list={alphaTypes} cls="alphaTypes" handleHorizenClick={handleHorizenClick} />
        </Nav>
        <Main>
          <div>
            <Scroll
              onScroll={forceCheck}
            >
              <RenderSingerList list={singerList.toJS()} />
            </Scroll>
          </div>
        </Main>
      </View>
    </Left>
  );
};

const RenderSingerList = ({ list }: any) => {
  console.log(list);
  return (
    <SingerList>
      {
        list.map(
          (item: any) => (
            <SingerItem key={item.id}>
              <div className="img-wrapper">
                <img src={item.picUrl} alt="" />
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
  singerList: state.getIn(['singers', 'singerList'])
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHotSinger: () => dispatch(getHotSingersList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers);