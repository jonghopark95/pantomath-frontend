import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Josefin+Sans:ital@0;1&family=Poppins:wght@300;400&display=swap");

    ${reset};
`;

export default globalStyle;
