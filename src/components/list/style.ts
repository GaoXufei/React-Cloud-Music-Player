import styled from 'styled-components';
import style from '@/assets/style-global'

export const View = styled.div`
  max-width: 100%;
`;

export const Title = styled.div`
  font-weight: 700;
  padding-left: 6px;
  line-height: 60px;
  font-size: 14px;
  color: ${style["font-color"]};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ListItem = styled.li`
  position: relative;
  width: 32%;
  font-size: 12px;

  img{
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  padding-bottom: 100%;
  height: 0;
  position: relative;

  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 100%);;
    z-index: 2;
  }

  & img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
    position: absolute;
    top: 0;
  }

  & p{
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 3px;
    z-index: 3;

    & i{
      font-size: 13px;
      margin-right: 2px;
    }
  }
`;

export const Text = styled.p`
  width: 100%;
  height: 50px;
  padding: 0 2px;
  line-height: 1.4;
  box-sizing: border-box;
`;

