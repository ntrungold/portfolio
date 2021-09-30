import { Button, ButtonGroup, Col } from 'react-bootstrap';
import {Set} from '../interfaces/set';
import SETS from '../assets/q-sets.json'
import { getRandomElement } from '../utilities/data';
import React, {useState} from 'react';
import BasePopupWrapper from './Popup/BasePopupWrapper';

export function ControlPanel({setSet}: {setSet: (s: Set)=>void}): JSX.Element {
    function setRandomSet() {
        setSet(getRandomElement(SETS as Set[]))
    }

    //adding the popup for How to Play
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false)
    const togglePopup = () => {
        setIsPopupVisible(wasPopupVisible => !wasPopupVisible)
    }
    
    return <Col>
    
    <ButtonGroup aria-label="Button Set">
        <Button onClick={setRandomSet}>New Game</Button>
        <Button onClick={togglePopup} variant="secondary">How to Play</Button>
        <BasePopupWrapper isPopupVisible={isPopupVisible} onBackdropClick= {togglePopup}/>
    </ButtonGroup>
    </Col>
}