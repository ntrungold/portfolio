import { Button, Col } from 'react-bootstrap';
import {Set} from '../interfaces/set';
import SETS from '../assets/q-sets.json'
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setSet}: {setSet: (s: Set)=>void}): JSX.Element {
    return <Col>
    <Button onClick={
        () => setSet(getRandomElement(SETS as Set[]))
    }>New Game</Button>
    </Col>
}