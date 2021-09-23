import { Button, Col } from 'react-bootstrap';
import {Set} from '../interfaces/set';
export function ControlPanel({setSet}: {setSet: (s: Set)=>void}): JSX.Element {
    return <Col>
    <Button>New Game</Button>
    </Col>
}