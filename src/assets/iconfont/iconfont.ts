import { createGlobalStyle } from 'styled-components'

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1422662 */
    src: url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.eot');
    src: url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.woff') format('woff'),
    url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1422662_0dxe4up0pvql.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;