
// import Halamada from './components/pages/body/body';
import MainNavigation from './components/pages/MainNavigation';
// import LoginPage from './components/login';
// import ShowLogowanie from './components/pages/body/body';
import React from 'react';



class App extends React.Component {
constructor(){
  super();
  this.state = {
    monsters: []
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(users => this.setState({monsters: users}))
}

  render() {
    return (
    
    <div className="App">
      <MainNavigation></MainNavigation>
      {
        this.state.monsters.map(monster => (<h1 key={ monster.id }> { monster.name }</h1>))
      }
    </div>
    )
}
};


export default App;
