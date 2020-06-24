import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1575645948204'); /* IE9 */
    src: url('./iconfont.eot?t=1575645948204#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1575645948204') format('woff'),
    url('./iconfont.ttf?t=1575645948204') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1575645948204#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`