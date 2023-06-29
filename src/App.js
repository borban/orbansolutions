import React from 'react';
import Summary from './components/Summary';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Summary/>
        <Skills/>
        <Experience/>
        <Education/>
      </div>
    );
  }
}

export default App;
