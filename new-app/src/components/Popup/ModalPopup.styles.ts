import { findByLabelText } from '@testing-library/dom';
import { ClientRequest } from 'http';
import { relative } from 'path';
import styled from 'styled-components'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const PopupContainer = styled.div `
    background-color: blue;
    display: flex;
    flex-direction:collapseTextChangeRangesAcrossMultipleVersions;
    align-items: ClientRequest;
    position: relative;

`;

export const DesktopPopupContainer = styled(PopupContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rgba(0,0,0,0.5);
    padding: 40px;
    width: 450px;
    font-size: 26px;
`

export const Header = styled.h3`
    color: white;
    font size: 35px;
    line-height: 1em;
    font-weight: 300;
    margin: 5px 0 10px;
    text align: center;
`