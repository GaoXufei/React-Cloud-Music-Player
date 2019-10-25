import styled from 'styled-components';
import style from '@/assets/style-global'

export const Top = styled.div`
  padding: 5px 20px;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  & .background{
    background: url(${(props: { background: string }) => props.background}) left top no-repeat;
    background: contain;
    background-position: 0 0;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(20px);

    & .filter{
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, .2);
    }
  }
`;

export const TopImage = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 100%);
    height: 35px;
    width: 100%;
  }

  & img{
    width: 100%;
    height: 100%;
  }

  & p{
    position: absolute;
    top: 0;
    right: 0;
    height: 20px;
    z-index: 3;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 3px;
    box-sizing: border-box;

    & i{
      font-size: 13px;
      margin-right: 2px;
      display: inline-block;
    }
  }
`;

export const TopDescription = styled.div`
  display: flex;
  flex: 1;
  height: 120px;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  box-sizing: border-box;
  
  & h1{
    font-weight: 700;
    color: #fff;
    font-size: ${style["font-size-l"]};
    line-height: 1.5;
    max-height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DescriptionAuthor = styled.div`
  display: flex;
  align-items: center;

  & .author{
    width: 20px;
    height: 20px;
    margin-right: 10px;

    & img{
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  & .name{
    font-size: ${style["font-size-m"]};
    color: #f1f1f1;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  margin-top: -55px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
`;

export const MenuItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;

  & i{
    font-size: 20px;
  }

  & span{
    font-size: 12px;
  }
`;