import logo from './logo.svg';
import React from "react"; 
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes,Route, Link, renderMatches } from "react-router-dom"; 

//////////////////////////////////////////
{/* Internal css in App.js*/}
  const first_css = `
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  `;
  function first() {
    return (
      <div className="App">
        <style>{first_css}</style>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
//////////////////////////////////////////
{/*
1. Routing in react
2. Using <script> tag in react function returns using <Helmet> tag
3. Regular HTML page rendering through these <script> tags
*/}
  const second_css = `
  #first_home {
    background-color: yellow;
  }
  `;

  function second() {
    return (<div>
    <style>{second_css}</style>
    <h2 id="first_home">Home</h2>
    <h2>Home</h2>
    <p id="para"></p>
    <Helmet>  {/* Helmet is to enable script tag in react jsx */}
    <script>{`
      alert('Hi');
      document.getElementById('para').innerHTML = \`
      Hello paragraph
      \`;
      document.write(\`
        <h1>Hey!!</h1>
        <p id="para"></p>
        <script>
        document.getElementById('para').innerHTML = "Hello nested paragraph";
        </script>
      \`)
      console.log('Hi');
      `}
    </script>
    </Helmet>
  </div>);
  }  
  
  function About() { 
    return <h2>About</h2>; 
  } 
  
  function Users() { 
    return <h2>Users</h2>; 
  } 

  function App(){
    return ( 
      <Router> 
        <div> 
          <nav> 
            <ul> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/about/">About</Link> 
              </li> 
              <li> 
                <Link to="/users/">Users</Link> 
              </li> 
            </ul> 
          </nav> 
          <Routes>
            {/*https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element */}
          <Route path="/" exact element={<second />} /> 
          <Route path="/about/" element={<About />} /> 
          <Route path="/users/" element={<Users />} /> 
          </Routes>
        </div> 
      </Router> 
    ); 
  } 

//////////////////////////////////////////

// export default first;
export default second;
