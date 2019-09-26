import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Container, SearchContainer, ContentContainer } from './style'
import SearchComponent from '@/ui/search'
import { getHotKeyWords } from './store/actionCreators'

function Search(props: any) {
  // 控制搜索页路由显示与否
  const [show, setShow] = useState(false);
  // 获取输入框内容
  const [query, setQuery] = useState('');
  // 获取mapState
  const { hotList } = props;
  // 获取mapDispatch
  const { getHotKeyWordsDispatch } = props;

  useEffect(() => {
    if (!hotList.length) {
      getHotKeyWordsDispatch()
    }
    setShow(true);
  }, [])

  function handleBack() {
    setShow(false)
  }

  function handleQuery(q: string) {
    setQuery(q);
    if (!q) return;
    console.log(q)
  }

  const data_hot_list = hotList ? hotList.toJS() : [];


  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <SearchContainer>
          <SearchComponent handleBack={handleBack} handleQuery={handleQuery} />
        </SearchContainer>
        <ContentContainer>
          <HotListComponent list={data_hot_list} />
        </ContentContainer>
      </Container>
    </CSSTransition>
  )
}

const HotListComponent = ({ list }: { list: [{ first: string }] }) => {
  return (
    <div>
      {
        list.map((item: any) => (<div key={item.first}>{item.first}</div>))
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  hotList: state.getIn(['search', 'hotList'])
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHotKeyWordsDispatch: () => dispatch(getHotKeyWords())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));