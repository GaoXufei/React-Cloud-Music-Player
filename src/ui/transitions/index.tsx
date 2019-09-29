import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { EnterLoadingStyle, LoadingWrapper } from './style'

export const Left: React.FC = ({ children }: any) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
    return () => {
      setShow(false)
    };
  }, [])

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  )
}

export const Loading = (props: any) => {
  return (
    <EnterLoadingStyle>
      <LoadingWrapper>
        <div></div>
        <div></div>
      </LoadingWrapper>
    </EnterLoadingStyle>
  );
}