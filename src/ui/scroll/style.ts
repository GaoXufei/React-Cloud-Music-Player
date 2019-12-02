import styled, { keyframes } from 'styled-components'
import style from '@/assets/style-global'

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const skStretchdelay = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.6);
  }
  20% {
    transform: scaleY(1);
  }
`;

const skCircle = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.5); }
`;

// 上滑加载动画
export const PullUpLoadingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;

  & .wrapper{
    width: 30px;
    height: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div{
      background: ${style["theme-color"]};
      width: 2px;
      height: 100%;
      animation: ${skStretchdelay} 1.2s infinite ease-in-out;

      &.item2{
        animation-delay: -1.1s;
      }
      &.item3{
        animation-delay: -1.0s;
      }
      &.item4{
        animation-delay: -0.9s;
      }
      &.item5{
        animation-delay: -0.8s;
      }
    }
  }
`;


export const PullDownLoadingStyle = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  margin: auto;
  z-index: 100;

  & .wrapper{
    width: 30px;
    height: 30px;
    margin: 0 auto;

    & .circle{
      width: 100%;
      height: 100%;
      background: ${style["theme-color"]};
      border-radius: 50%;
      animation:${skCircle} .8s infinite ease-in-out;
    }
  }
`;