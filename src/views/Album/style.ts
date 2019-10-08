import styled from 'styled-components'
import style from '@/assets/style-global'

export const SongsList = styled.ul`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  & li{
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #e4e4e4;

    & dt{
      font-size: 14px;
      color: ${style["font-color-desc"]};
    }

    & dd{
      font-size: 12px;
      margin-top: 5px;
      color: ${style["font-color-desc-v2"]};
      line-height: 1.6;
    }
  }
`;