import React, { useState, useRef, forwardRef, useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { View, Header } from './style'
import { TransitionWrapper } from '@/ui/transitions'
import { Loading } from '@/ui/transitions'
import Scroll from '@/ui/scroll'
import { isEmptyObject } from '@/utils'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

// components
import AlbumDetail from '@/components/albumDetail'

const Album: React.FC = (props: any) => {
  // 获取页面传递过来的id
  const id = props.match.params.id;
  // 控制当前页面显示/隐藏
  const [show, setShow] = useState<boolean>(true);
  // 设置title
  const [title, setTitle] = useState<string>('歌单');
  // 获取header element
  const headerElement = useRef<HTMLHeadElement>(null);
  // 获取Dispatch
  const { getAlbumDataDispatch, changePullUpLoadingStateDispatch } = props;
  // 获取State
  const { currentAlbum, enterLoading, pullUpLoading, songsCount } = props;
  // DATA
  const [DATA_CURRENT_ALBUM, SET_DATA_CURRENT_ALBUM] = useState<any | null>({})

  // handle 当前页面显示/隐藏函数
  const handleBack = useCallback(() => setShow(false), [])

  // handle 页面滚动
  const handleScroll = () => {

  }

  // handle 
  const handlePullUp = () => {
    changePullUpLoadingStateDispatch(true);
    changePullUpLoadingStateDispatch(false);
  }

  // 初始化数据
  useEffect(() => {
    SET_DATA_CURRENT_ALBUM({})
    currentAlbum.clear();
    // eslint-disable-next-line
  }, [])

  // 网络请求
  useEffect(() => {
    getAlbumDataDispatch(id);
  }, [getAlbumDataDispatch, id])

  // useState 数据
  useEffect(() => {
    currentAlbum.size && SET_DATA_CURRENT_ALBUM(currentAlbum.toJS());
  }, [currentAlbum])

  return (
    <TransitionWrapper show={show} props={props}>
      <View>
        {/* header */}
        <ComponentHeader ref={headerElement} handleClick={handleBack} title={title} />
        {/* album-detail */}
        {
          !isEmptyObject(DATA_CURRENT_ALBUM)
          &&
          (
            <Scroll
              onScroll={handleScroll}
              pullUp={handlePullUp}
              pullUpLoading={pullUpLoading}
              bounceTop={false}
            >
              <AlbumDetail currentAlbum={DATA_CURRENT_ALBUM} pullUpLoading={pullUpLoading} />
            </Scroll>
          )
        }
        {/* loading */}
        {enterLoading ? <Loading /> : null}
      </View>
    </TransitionWrapper>
  )
}

const ComponentHeader = forwardRef(({ handleClick, title }: any, ref: any) => {
  return (
    <Header ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe643;</i>
      <h1>{title}</h1>
    </Header>
  )
})

// 映射redux全局的state到组件props
const mapStateToProps = (state: any) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  pullUpLoading: state.getIn(['album', 'pullUpLoading']),
  enterLoading: state.getIn(['album', 'enterLoading']),
  startIndex: state.getIn(['album', 'startIndex']),
  totalCount: state.getIn(['album', 'totalCount']),
  songsCount: state.getIn(['player', 'songsCount'])
})

// 映射dispatch到props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getAlbumDataDispatch: (id: number) => {
      dispatch(actionCreators.changeEnterLoading(true));
      dispatch(actionCreators.getAlbumList(id));
    },
    changePullUpLoadingStateDispatch: (state: any) => dispatch(actionCreators.changePullUpLoading(state)),
    changeScrollYDispatch: (y: any) => dispatch(actionCreators.changeScrollY(y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(Album)));