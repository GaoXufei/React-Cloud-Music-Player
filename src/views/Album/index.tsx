import React, { useState, useRef, forwardRef } from 'react'
import { withRouter } from 'react-router-dom'
import { View, Header } from './style'
import { TransitionWrapper } from '@/ui/transitions'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'


const Album: React.FC = (props: any) => {
  // 获取页面传递过来的id
  const id = props.match.params.id;
  // 控制当前页面显示/隐藏
  const [show, setShow] = useState<boolean>(true);
  // 设置title
  const [title, setTitle] = useState<string>('歌单');
  // 获取header element
  const headerElement = useRef<HTMLHeadElement>(null);
  // handle 当前页面显示/隐藏函数
  const handleBack = () => setShow(false);
  return (
    <TransitionWrapper show={show} props={props}>
      <View>
        <ComponentHeader ref={headerElement} handleClick={handleBack} title={title} />
        {id}
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
    getAlbumDataDispatch: (id: number, fromURL: string) => {
      dispatch(actionCreators.changeEnterLoading(true));
      dispatch(actionCreators.getAlbumList(id, fromURL));
    },
    changePullUpLoadingStateDispatch: (state: any) => dispatch(actionCreators.changePullUpLoading(state)),
    changeScrollYDispatch: (y: any) => dispatch(actionCreators.changeScrollY(y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(Album)));