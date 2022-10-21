import React from 'react';
import {render} from 'react-dom';  // import ReactDOM from 'react-dom/client'; in React 18
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const index_css = `
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

const root = document.getElementById('root');

render(
  <div>
  {/* <React.StrictMode> */}
    <style>{index_css}</style>
    <App />
  {/* </React.StrictMode> */}
  </div>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
