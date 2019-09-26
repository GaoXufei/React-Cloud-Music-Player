import React, { useRef, useEffect } from 'react';
import { View, TopView, Top, Tab } from './style'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom';


function Home(props: any) {

  const { route, history } = props;
  return (
    <View>
      <TopView>
        <TopComponent history={history} />
        <TabComponent />
      </TopView>
      {renderRoutes(route.routes)}
    </View>
  );
}

function TopComponent({ history }: any) {

  return (
    <Top>
      <span className="iconfont menu">&#xeaf1;</span>
      <span>云音乐</span>
      <span className="iconfont search" onClick={() => history.push('/search')}>&#xe61f;</span>
    </Top>
  );
}


// 顶部导航组件
function TabComponent() {
  // 获取线条dom
  const domLine = useRef<any>(null)
  // 获取导航项dom
  const domTab = useRef<any>(null)

  useEffect(() => {
    // 获取顶部导航列表并且将domList转换为arrayList
    const tabChildren = Array.from(domTab.current.children);

    // 筛选出当前选中的.selected dom
    // 处理如果开始并非首页路由，默认选择首页第一项路由
    const tab: any =
      tabChildren.filter((dom: any): boolean => dom.className === 'selected')[0]
        ?
        tabChildren.filter((dom: any): boolean => dom.className === 'selected')[0]
        :
        tabChildren[0]
      ;
    play(tab, domLine.current);
  }, [domLine, domTab])

  const play = (current: any, line: any) => {
    if (!(current && line)) return;
    const _current = current.localName === 'i' ? current : current.children[0];
    // 获取导航项宽度
    const width = _current.offsetWidth / 2;
    // 获取一半的导航项宽度
    const halfWidth = width / 2;
    // 获取导航项偏移量 + 一半的宽度 = 显示相对居中
    const left = _current.offsetLeft + halfWidth;
    // 将导航项宽度赋值给线
    line.style.width = `${width}px`;
    // 将偏移量值给线
    line.style.transform = `translateX(${left}px)`

  }

  const handleClick = (that: any) => {
    play(that.target, domLine.current);
  }

  return (
    <Tab ref={domTab}>
      <NavLink to="/recommend" activeClassName="selected" onClick={(e) => handleClick(e)}><i>推荐</i></NavLink>
      <NavLink to="/singers" activeClassName="selected" onClick={(e) => handleClick(e)}><i>歌手</i></NavLink>
      <NavLink to="/rank" activeClassName="selected" onClick={(e) => handleClick(e)}><i>排行榜</i></NavLink>
      <i className="line" ref={domLine}></i>
    </Tab>
  )
}


export default Home;