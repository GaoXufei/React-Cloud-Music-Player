import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  transform-origin: right bottom;
  overflow: hidden;
  background: #f1f1f1;
  padding-top: 40px;
  box-sizing: border;

  &.fly-enter, &.fly-appear{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`;

/**
 * 搜索外层容器
 */
export const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: -40px;
`;
/**
 * 搜索结果外层容器
 */
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

/**
 * 热门搜索
 */
export const HotWords = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const HotWordsTitle = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #666;
`;

export const HotWordsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -15px;
`;

export const HotWordsItem = styled.li`
  margin-top: 15px;
  margin-left: 20px;
  padding: 5px;
  background: #fff;
  font-size: 12px;
`;




