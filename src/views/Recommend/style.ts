import styled from 'styled-components'

export const View = styled.div`
  width: 100%;
  position: fixed;
  top: 90px;
  /* padding-top: 10px; */
  bottom: 0;
  left: 0;

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