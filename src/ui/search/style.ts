import styled from 'styled-components'
import style from '@/assets/style-global'

export const View = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 40px;
  box-sizing: border-box;
  background: ${style["theme-color"]};
`;


export const Back = styled.div`
  width: 40px;
  height: 100%;
  margin-left: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
`;

export const Input = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  & input{
    width: 100%;
    height: 30px;
    border: none;
    border-bottom:1px solid #fff;
    box-sizing: border-box;
    background: transparent;
    outline: none;
    color: #fff;

    &::placeholder{
      color: #fff;
    }
  }

  & i{
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: -30px;
    font-size: 24px;
  }
`;
