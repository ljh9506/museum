import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Encode Sans Expanded', sans-serif;
    };

            font-size: 24px !important;
.carousel .control-next.control-arrow:before {
    border-left: 24px solid #fff !important;
}
.carousel .control-prev.control-arrow:before {
    border-right: 24px solid #fff !important;
}
`;
