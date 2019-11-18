import styled from 'styled-components'
import style from '@/assets/style-global'

export const View = styled.div`
  width: 100%;
  position: fixed;
  top: 90px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  &.fly-enter, &.fly-appear{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    opacity: 1;
    transition: all .1s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    opacity: 0;
    transition: all .1s;
    transform: translate3d(100%, 0, 0);
  }
`;

export const Nav = styled.div`
  width: 100%;
  padding: 5px 0;
`;

export const Main = styled.div`
  flex: 1;
  height: 60px;
`;

export const SingerList = styled.div`

`;

export const SingerItem = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .img-wrapper{
    border-radius: 5px;
    overflow: hidden;

    & img{
      width: 50px;
      height: 50px;
      display: block;
    }
  }

  .img-wrapper + p{
    font-size: ${style["font-size-m"]};
    padding-left: 20px;
    box-sizing: border-box;
    color: ${style["font-color"]};
  }
`;

export const HorizenWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`;

export const HorizenTitle = styled.div`
  color: ${style["font-color-desc-v2"]};
  font-size: ${style["font-size-m"]};
  padding: 6px;
  box-sizing: border-box;
  box-shadow: 6px 0 6px rgba(242,243,244,.8);
  position: relative;
  z-index: 2;
`;

export const HorizenList = styled.div`
  flex: 1;
  overflow: hidden;

  & .swiper-slide{
    width: auto;
    display: flex;
    align-items: center;
    font-size: ${style["font-size-m"]};
    padding: 0 4px;

    &.active{
      color: ${style["theme-color"]};
    }
  }
`;


