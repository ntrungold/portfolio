import React from "react";
import Modal from "./Modal";
import { DesktopPopupContainer, Header } from "./ModalPopup.styles";

interface BasePopupWrapperProps {
    isPopupVisible: boolean;
    onBackdropClick: () => void;
}

const BasePopupWrapper : React.FC<BasePopupWrapperProps> = ({onBackdropClick, isPopupVisible}) => {
    if(!isPopupVisible) {
        return null
    }
    
    return (<Modal onBackdropClick={onBackdropClick}>
        <DesktopPopupContainer>
            <Header>How to Play</Header>
        </DesktopPopupContainer>
    </Modal>);
}

export default BasePopupWrapper