import styled from 'styled-components'
import style from '@/assets/style-global'

export const SingerList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px 10px;
  box-sizing: border-box;

  & .title{
    font-size: ${style["font-size-m"]};
    padding: 5px 0;
  }
`;

export const SingerItem = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid ${style["border-color"]};
  display: flex;
  align-items: center;
  flex-direction: row;
  box-align: center;
`;

export const SingerImg = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  & > img{
    display: block;
    width: 50px;
  height: 50px;
  }
`

export const SingerName = styled.div`
  color: ${style["font-color-desc"]};
  font-size: ${style["font-size-m"]};
  font-weight: 500;
  padding-left: 10px;
  box-sizing: border-box;
`;
