
import React from 'react';
import MainNavigation from './components/pages/MainNavigation';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Logowanie from './components/logowanie/Logowanie';
import Matrix from './components/pages/matrix/matrix';
import Pictures from './components/pages/pictures/pictures';
import Contact from './components/pages/contact/contact';
import Test from './components/pages/test/test';

class App extends React.Component {

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
              <Route path="/test" element={<Test name="Yoo"/>} />
            </Routes>         
      </div>
    </>
    )
}
};


export default App;
