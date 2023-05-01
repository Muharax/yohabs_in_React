
import MainNavigation from './components/pages/MainNavigation';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
// import Products from './components/pages/Products';
// import About from './components/pages/about';
import Logowanie from './components/logowanie/Logowanie'
import background from './components/pages/background.jpg'

// import NavBar from './components/pages/navBar';


class App extends React.Component {
// constructor(){
//   super();
//   this.state = {
//     monsters: []
//   }
// }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(Response => Response.json())
//   .then(users => this.setState({monsters: users}))
// }

  render() {
    return (
    <>
      <div className="App">
      <div className="tlo" style={{backgroundImage: `url(${background})`}}>
        <MainNavigation/>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/logowanie" element={<Logowanie />} />
            </Routes>         
          </div>
      </div>
    </>
    )
}
};


export default App;
