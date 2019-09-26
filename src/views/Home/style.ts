import styled from 'styled-components'
import style from '@/assets/style-global'

export const View = styled.div`
  
`;

export const TopView = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Top = styled.div`
  height: 50px;
  background: ${style["theme-color"]};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  
  & span{
    font-size: 18px;
  }
`;

export const Tab = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  box-sizing: border-box;
  background: ${style["theme-color"]};
  position: relative;

  & > i.line{
    position: absolute;
    bottom: 5px;
    left: 0;
    height:2px;
    width: 0;
    background: #fff;
    transition: all .2s;
  }

  & a{
    padding: 6px;
    outline: none;
    flex: 1;
    text-align: center;
    outline: none;
    -moz-appearance:none;
    -webkit-appearance:none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    & i{
      display: inline-block;
      color: #fff;
      padding-bottom: 5px;
      font-size: 15px;
    }

    &.selected{
      & i{
        /* border-bottom: 2px solid #fff; */
      }
    }
  }
`;