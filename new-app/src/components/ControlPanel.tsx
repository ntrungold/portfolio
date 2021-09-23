import { Button, ButtonGroup, Col } from 'react-bootstrap';
import {Set} from '../interfaces/set';
import SETS from '../assets/q-sets.json'
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setSet}: {setSet: (s: Set)=>void}): JSX.Element {
    function setRandomSet() {
        setSet(getRandomElement(SETS as Set[]))
    }
    
    
    return <Col>
    
    <ButtonGroup aria-label="Button Set">
        <Button onClick={setRandomSet}>New Game</Button>
        <Button variant="secondary">How to Play</Button>
    </ButtonGroup>
    </Col>
}