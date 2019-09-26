import styled from 'styled-components'
import style from '@/assets/style-global'

export const View = styled.div`
  
  & .before{
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    z-index: 1;
    background: ${style["theme-color"]};
  }

  .swiper-container{
    border-radius: 6px;
    width: 98%;

    .swiper-pagination-bullet-active{
      background: darkred;
    }
  }

`;
