import React, {useState} from 'react';
import './App.css';
import SETS from './assets/q-sets.json'
import { ControlPanel } from './components/ControlPanel';
import { SetViewer } from './components/SetViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'
import {Set} from './interfaces/set'

function App(): JSX.Element {
  const [activeSet, setActiveSet] = useState<Set>(SETS[0] as Set);

  return (
    <Container className="App">
      <Row>
        <ControlPanel setSet={setActiveSet}></ControlPanel>
        <SetViewer set={activeSet}></SetViewer>
      </Row>
        
    </Container>
  );
}

export default App;
