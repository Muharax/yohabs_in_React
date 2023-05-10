
import React from 'react';
import MainNavigation from './components/pages/MainNavigation';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Logowanie from './components/logowanie/Logowanie';
import background from './components/pages/background.jpg';
import Matrix from './components/pages/matrix/matrix';
import Pictures from './components/pages/pictures/pictures';
import Contact from './components/pages/contact/contact';

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
        <MainNavigation/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/matrix" element={<Matrix />} />
              <Route path="/pictures" element={<Pictures />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logowanie" element={<Logowanie />} />
            </Routes>         
      </div>
    </>
    )
}
};


export default App;
