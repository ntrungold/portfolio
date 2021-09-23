import React from 'react';
import './App.css';
import SETS from './assets/q-sets.json'
import { ControlPanel } from './components/ControlPanel';
import { SetViewer } from './components/SetViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'


function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
        <ControlPanel></ControlPanel>
        <SetViewer></SetViewer>
      </Row>
        
    </Container>
  );
}

export default App;
