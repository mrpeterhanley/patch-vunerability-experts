import { createGlobalStyle } from 'styled-components';
import regular from '../fonts/Roboto-Regular.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Roboto-Regular;
        src: url(${regular});
    }

    html {
        font-family: Roboto-Regular, Arial, Helvetica, sans-serif;
    }

    h1 {
        font-size: 36px;
        line-height: 2.5rem;
    }

    p {
        line-height: 1.6rem;
    }
`;

export default Typography;