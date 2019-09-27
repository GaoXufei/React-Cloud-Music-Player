import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  Container,
  SearchContainer,
  ContentContainer,
  HotWords,
  HotWordsList,
  HotWordsItem,
  HotWordsTitle
} from './style'
import SearchComponent from '@/ui/search'
import {
  getHotKeyWords,
  getSuggestList
} from './store/actionCreators'


function Search(props: any) {
  // 控制搜索页路由显示与否
  const [show, setShow] = useState(false);
  // 获取输入框内容
  const [query, setQuery] = useState('');
  // 获取mapState
  const {
    hotList,
    suggestList,
    songsList
  } = props;
  // 获取mapDispatch
  const { getHotKeyWordsDispatch, getSuggestListDispatch } = props;

  // 默认开启当前路由
  useEffect(() => {
    setShow(true);
  }, [])

  // 请求热门关键字接口
  useEffect(() => {
    if (!hotList.size) {
      getHotKeyWordsDispatch()
    }
    // eslint-disable-next-line
  }, [hotList])

  // 关闭当前路由
  function handleBack() {
    setShow(false)
  }
  // 获取输入关键字
  function handleQuery(q: string) {
    setQuery(q);
    if (!q) return;
    getSuggestListDispatch(q);
  }
  // 点击获取热门关键字
  function handleNewQuery(q: string) {
    setQuery(q);
  }
  // 热门搜索数据
  const data_hot_list = hotList.toJS();
  // 相关歌手 相关歌单
  const data_suggest_list = suggestList.toJS();
  // 相关歌曲
  const data_songs_list = songsList.toJS();

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
          <SearchComponent newQuery={query} handleBack={handleBack} handleQuery={handleQuery} />
        </SearchContainer>
        <ContentContainer>
          {/* 如果搜索关键字为空则显示热门关键字 */}
          {!query && <HotListComponent handleNewQuery={handleNewQuery} list={data_hot_list} />}
          {query && <SearchContentComponent data={1} />}
        </ContentContainer>
      </Container>
    </CSSTransition>
  )
}

const SearchContentComponent = ({ data }: any) => useMemo(() => {
  return (
    <div>{data}</div>
  )
}, [data])

/**
 * 热门搜索
 * @param list {Array} 数据列表
 * @param handleNewQuery { Function } 获取选择的关键字
 */
const HotListComponent = ({ list, handleNewQuery }: { list: [{ first: string }], handleNewQuery: any }) => {
  const item = list.map((item: any) => (<HotWordsItem onClick={() => handleNewQuery(item.first)} key={item.first}>{item.first}</HotWordsItem>));
  return (
    <HotWords>
      <HotWordsTitle>{`热门搜索`}</HotWordsTitle>
      <HotWordsList>
        {item}
      </HotWordsList>
    </HotWords>
  );
}

const mapStateToProps = (state: any) => ({
  hotList: state.getIn(['search', 'hotList']),
  suggestList: state.getIn(['search', 'suggestList']),
  songsList: state.getIn(['search', 'songsList'])
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHotKeyWordsDispatch: () => dispatch(getHotKeyWords()),
    getSuggestListDispatch: (q: string) => dispatch(getSuggestList(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));