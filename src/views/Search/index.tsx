import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { forceCheck } from 'react-lazyload'
import { getNameString } from '@/utils'
import {
  /* 容器 */
  Container,
  SearchContainer,
  ContentContainer,
  /* 热门搜索 */
  HotWords,
  HotWordsList,
  HotWordsItem,
  HotWordsTitle,
} from './style'
import { ComponentSingerList, ComponentAlbumList } from '@/components/singer'
import { SongsList } from '@/views/Album/style'
import SearchComponent from '@/ui/search'
import { Loading } from '@/ui/transitions'
import Scroll from '@/ui/scroll'
import {
  getHotKeyWords,
  getSuggestList,
  changeEnterLoading
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
    songsList,
    enterLoading
  } = props;
  // 获取mapDispatch
  const {
    getHotKeyWordsDispatch,
    getSuggestListDispatch,
    changeEnterLoadingDispatch
  } = props;

  // 热门搜索
  const [DATA_HOT_LIST, DATA_SET_HOT_LIST] = useState<any>([])
  // 相关歌手 相关歌单
  const [DATA_SONGS, DATA_SET_SONGS] = useState([]);
  // 相关歌曲
  const [DATA_SUGGEST, DATA_SET_SUGGEST] = useState({});

  // 请求热门关键字接口
  useEffect(() => {
    // 显示当前页面
    setShow(true);
    // 如果size为0时 请求热门搜索数据
    (!hotList.size) && getHotKeyWordsDispatch();
    // 如果size大于0时 将热门搜索数据写入useState
    (hotList.size) && DATA_SET_HOT_LIST(hotList.toJS())
    // eslint-disable-next-line
  }, [hotList])

  useEffect(() => {
    songsList.size && DATA_SET_SONGS(songsList.toJS())
  }, [songsList])

  useEffect(() => {
    suggestList.size && DATA_SET_SUGGEST(suggestList.toJS())
  }, [suggestList])

  // 关闭当前路由
  function handleBack() {
    setShow(false)
  }
  // 获取输入关键字
  function handleQuery(q: string) {
    // 输入关键字
    setQuery(q);
    // 清空数据 防止多次渲染
    DATA_SET_SONGS([]);
    DATA_SET_SUGGEST({});
    if (!q) return;
    // 改变loading动画 -> 开
    changeEnterLoadingDispatch(true);
    // 如果不为空的情况下请求数据
    getSuggestListDispatch(q);
  }
  // 点击获取热门关键字
  function handleNewQuery(q: string) {
    setQuery(q);
  }


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
          {!query && <HotListComponent handleNewQuery={handleNewQuery} list={DATA_HOT_LIST} />}
          {
            query
            &&
            DATA_SONGS.length > 0
            &&
            Object.keys(DATA_SUGGEST).length > 0
            &&
            <SearchContentComponent dataSuggestList={DATA_SUGGEST} dataSongsList={DATA_SONGS} />
          }
          {/* loading 动画 */}
          {enterLoading ? <Loading /> : null}
        </ContentContainer>
      </Container>
    </CSSTransition>
  )
}

/**
 * 搜索主要内容
 */
const SearchContentComponent = ({ dataSuggestList, dataSongsList }: any) => {
  // 相关歌手数据
  // 设置默认值，如果值为undefined则设置为空数组
  const { artists = [], playlists = [] } = dataSuggestList;
  return (
    <Scroll onScroll={forceCheck}>
      <div>
        <ComponentSingerList list={artists} title={`相关歌手`} name={`歌手`} />
        <ComponentAlbumList list={playlists} title={`相关歌单`} name={`歌单`} />
        <RenderSongs songsList={dataSongsList} />
      </div>
    </Scroll>
  )
}

/**
 * SearchContentComponent
 * 歌曲列表
 * { songsList } { Array | Undefined }
 */
const RenderSongs = ({ songsList }: any) => {
  if (!songsList.length) return null;
  return (
    <SongsList>
      {
        songsList.map((item: any) => {
          return (
            <li key={item.id}>
              <dl>
                <dt>{item.name}</dt>
                <dd>{getNameString(item.artists)} - {item.name}</dd>
              </dl>
            </li>
          )
        })
      }
    </SongsList>
  )
}




/**
 * 热门搜索
 * @param list {Array} 数据列表
 * @param handleNewQuery { Function } 获取选择的关键字
 */
const HotListComponent = ({ list, handleNewQuery }: { list: [{ first: string }], handleNewQuery: any }) => {
  const items = list.map((item: any) => (<HotWordsItem onClick={() => handleNewQuery(item.first)} key={item.first}>{item.first}</HotWordsItem>));
  return (
    <HotWords>
      <HotWordsTitle>{`热门搜索`}</HotWordsTitle>
      <HotWordsList>
        {items}
      </HotWordsList>
    </HotWords>
  );
}

const mapStateToProps = (state: any) => ({
  hotList: state.getIn(['search', 'hotList']),
  suggestList: state.getIn(['search', 'suggestList']),
  songsList: state.getIn(['search', 'songsList']),
  enterLoading: state.getIn(['search', 'enterLoading'])
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHotKeyWordsDispatch: () => dispatch(getHotKeyWords()),
    getSuggestListDispatch: (q: string) => dispatch(getSuggestList(q)),
    changeEnterLoadingDispatch: (bool: boolean) => dispatch(changeEnterLoading(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));