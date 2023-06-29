import React from 'react';
import Summary from './components/Summary';
import Header from './components/Header';
import Skills from './components/Skills';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Summary/>
        <Skills/>
      </div>
    );
  }
}

export default App;
