import logo from './logo.svg';
import React from "react"; 
import { BrowserRouter as Router, Routes,Route, Link, renderMatches } from "react-router-dom"; 


  const app_css = `
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
  function App_1() {
    return (
      <div className="App">
        <style>{app_css}</style>
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

  const index_css = `
  #first_home {
    background-color: yellow;
  }
  `;

  function Index() {
    return (<div>
    <style>{index_css}</style>
    <h2 id="first_home">Home</h2>
    <h2>Home</h2>
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
          <Route path="/" exact element={<Index />} /> 
          <Route path="/about/" element={<About />} /> 
          <Route path="/users/" element={<Users />} /> 
          </Routes>
        </div> 
      </Router> 
    ); 
  } 

// export default App_1;
export default App;
