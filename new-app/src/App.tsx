import React from 'react';
import './App.css';
import SETS from './assets/q-sets.json'
import { ControlPanel } from './components/ControlPanel';
import { SetViewer } from './components/SetViewer';
function App(): JSX.Element {
  return (
    <div className="App">
        <ControlPanel></ControlPanel>
        <SetViewer></SetViewer>
    </div>
  );
}

export default App;
