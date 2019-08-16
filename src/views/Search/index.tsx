import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const Container = styled.div`
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

function Search(props: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [])

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
        <button onClick={() => setShow(false)}>返回</button>
        <h1>Search</h1>
      </Container>
    </CSSTransition>
  )
}


export default Search;