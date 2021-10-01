import React, {useState} from 'react';
import './App.css';
import SETS from './assets/q-sets.json';
import { ControlPanel } from './components/ControlPanel';
import { SetViewer } from './components/SetViewer';
import {GameBoard} from './components/GameBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {Set} from './interfaces/set';


function App(): JSX.Element {
  const [activeSet, setActiveSet] = useState<Set>(SETS[0] as Set);
  const [answerRevealed1, reveal1] = useState<boolean>(false);
  const [answerRevealed2, reveal2] = useState<boolean>(false);
  const [answerRevealed3, reveal3] = useState<boolean>(false);
  const [answerRevealed4, reveal4] = useState<boolean>(false);
  const [answerRevealed5, reveal5] = useState<boolean>(false);
  const [answerRevealed6, reveal6] = useState<boolean>(false);
  const [answerRevealed7, reveal7] = useState<boolean>(false);
  const [answerRevealed8, reveal8] = useState<boolean>(false);

  return (
    <Container className="App">
      <Row>
        <strong>Let's Play Family Feud!</strong>
      </Row> 
      <Row>
        <ControlPanel setSet={setActiveSet} ></ControlPanel>
        <SetViewer set={activeSet}></SetViewer>
      </Row>
      <Row>
        <GameBoard 
          set={activeSet} 
          reveal1={reveal1} answerRevealed1= {answerRevealed1}
          reveal2={reveal2} answerRevealed2= {answerRevealed2}
          reveal3={reveal3} answerRevealed3= {answerRevealed3}
          reveal4={reveal4} answerRevealed4= {answerRevealed4}
          reveal5={reveal5} answerRevealed5= {answerRevealed5}
          reveal6={reveal6} answerRevealed6= {answerRevealed6}
          reveal7={reveal7} answerRevealed7= {answerRevealed7}
          reveal8={reveal8} answerRevealed8= {answerRevealed8}
          ></GameBoard>
      </Row>
        
    </Container>
  );
}

export default App;
