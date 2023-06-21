import React from 'react';
import Summary from './components/Summary';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Summary/>
      </div>
    );
  }
}

export default App;
