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
            <Header>Setup:</Header>
           Split into two teams and select one person as the host. The official rules are located at the link provided at the bottom of the page.
        </DesktopPopupContainer>
    </Modal>);
}

export default BasePopupWrapper