import React from 'react';
import Summary from './components/Summary';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Summary/>
        <Skills/>
        <Experience/>
      </div>
    );
  }
}

export default App;
