import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding-top: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(246, 239, 202, 0.8);
 
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  
}
ul {
  list-style: none;
}
button {
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul,
p{
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
  text-align:center;
  }
`;
