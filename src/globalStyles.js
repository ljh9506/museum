import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans Expanded', sans-serif;
};

body {
        background-color: #242323;
}

.stop-scrolling {
    height: 100%;
    overflow: hidden;
}

.carousel .control-next.control-arrow:before {
    border-left: 24px solid #fff !important;
}

.carousel .control-prev.control-arrow:before {
    border-right: 24px solid #fff !important;
}
`;
