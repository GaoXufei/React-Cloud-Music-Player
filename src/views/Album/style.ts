import styled from 'styled-components'
import style from '@/assets/style-global'

export const SongsList = styled.ul`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  & li{
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #e4e4e4;

    & dt{
      font-size: 14px;
      color: ${style["font-color-desc"]};
    }

    & dd{
      font-size: 12px;
      margin-top: 5px;
      color: ${style["font-color-desc-v2"]};
      line-height: 1.6;
    }
  }
`;

export const View = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  background: #fff;
  background: #f2f3f4;
  transform-origin: right bottom;

  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  color: ${style["font-color-light"]};
  background: rgba(0,0,0,.4);

  & .back{
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
  }

  & h1, marquee{
    flex: 1;
    white-space:nowrap;
  }
`;

export const Content = styled.div``;