import styled from 'styled-components'
import style from '@/assets/style-global'

export const View = styled.div`
  width: 100%;
  background: #fff;
  box-shadow:10px 0 30px #fff;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

/**
 * 收藏 + 全部播放
 * { Wrapper }
 */
export const CollectionAndAllPlayer = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom:1px solid #f1f1f1;
`;

/**
 * 收藏
 */
export const Collection = styled.div`
  width: 150px;
  height: 50px;
  background: ${style["theme-color"]};
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: ${style["font-size-m"]};
  padding: 0 10px;
  box-sizing: border-box;

  & i{
    margin-right: 5px;
  }
`;

/**
 * 全部播放
 */
export const AllPlayer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${style["font-size-l"]};

  & i{
    margin-right: 10px;
    font-size: ${style["font-size-ll"]};
  }

  & em{
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-desc-v2"]};
  }
`;

/**
 * 歌曲列表
 */
export const List = styled.ul`
  padding:0 5px;
  box-sizing: border-box;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & i{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    color: ${style["font-color-desc"]};
  }

  & div{
    display: flex;
    flex: 1 1 0%;
    height: 60px;
    padding: 5px 0;
    box-sizing: border-box;
    border-bottom:1px solid #f1f1f1;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

    & p{
      color: ${style["font-color"]};
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }

    & span{
      display: block;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-desc-v2"]};
    }
  }
`;