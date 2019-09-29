import styled, { keyframes } from 'styled-components'
import style from '@/assets/style-global'

export const LeftWrap = styled.div`
  position: relative;

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

/**
 * loading动画
 */
const loadingKeyframes = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;
export const LoadingWrapper = styled.div`
  & > div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${ style["theme-color"]};
    animation: ${ loadingKeyframes} 1.4s infinite ease-in;
  }
  & > div:nth-child(2){
    animation-delay: -0.7s;
  }
`;
export const EnterLoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
`;