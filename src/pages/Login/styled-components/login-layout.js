import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const LoginLayout = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;
    .ticket_io {
        position: absolute;
        top: 0.5rem;
        color: ${PaleteColors.SECONDARY_GRAY};
    }

    button{
        box-shadow: 0 0 10px ${PaleteColors.PRIMARY_BLUE};
        &:hover {
           box-shadow: 0 0 10px ${PaleteColors.SECONDARY_BLUE}; 
        }
    }
    .form_container {
        text-align: center;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        box-sizing: border-box;
        padding: 2rem 1rem;
        border-radius: 0.5rem;
        /* background-color: #2C4268; */
        width: 16rem;
        position: relative;
        z-index: 2;
    }
    .email_container {
        height: 4rem;
        width: 4rem;
        position: absolute;
        /* left: -1rem;
        top: 1.5rem; */
        transition: 0.1s all;
        left: ${props => props.send === 'true' ? '-2rem' : '-1rem'};
        top: ${props => props.send === 'true' ? '1rem' : '1.5rem'};
        z-index: -1;
        color: ${props => props.send === 'true' ? PaleteColors.WHITE : PaleteColors.THIRD_GRAY};
    }
    .email {
        height: 100%;
        width: 100%;
        z-index: -1;
        rotate: -20deg;
        position: relative;
        transition: 0.1s all;
        background-color: ${props => props.send === 'true' ? PaleteColors.PRIMARY_RED : ''};
        filter: ${props => props.send === 'true' ? `drop-shadow(0 0 10px ${PaleteColors.PRIMARY_RED})` : ''};
        border-radius: 1rem;
    }
    .span_email {
        display: grid;
        place-items: center;
        position: absolute;
        top: -0.5rem;
        right: 0;
        rotate: -20deg;
        z-index: 3;
        color: green;
        background-color: ${PaleteColors.WHITE};
        color: ${PaleteColors.PRIMARY_RED};
        border: 2px solid ${PaleteColors.PRIMARY_RED};
        border-radius: 50%;
        font-size: 0.5rem;
        width: 1rem;
        height: 1rem;
        font-weight: bold;
    }
    .magic {
        height: 4rem;
        width: 4rem;
        position: absolute;
      /*   right: -1.8rem;
        bottom: 4rem; */
        transition: 0.1s all;
        right: ${props => props.send === 'true' ? '-3rem' : '-1.8rem'};
        bottom: ${props => props.send === 'true' ? '4rem' : '4rem'};
        z-index: -1;
        transition: 0.1s all;
        color: ${props => props.send === 'true' ? '#e9edc9' : PaleteColors.THIRD_GRAY};
        filter: ${props => props.send === 'true' ? `drop-shadow(0 0 10px #ca6702)` : ''};
    }
    .link {
        height: 4rem;
        width: 4rem;
        position: absolute;
       /*  left: -1.5rem;
        bottom: 0; */
        transition: 0.1s all;
        left: ${props => props.send === 'true' ? '-2rem' : '-1.5rem'};
        bottom: ${props => props.send === 'true' ? '-1rem' : '0'};
        z-index: -1;
        color: #2D3138;
        rotate: -85deg;
        transition: 0.1s all;
        color: ${props => props.send === 'true' ? '#e9edc9' : PaleteColors.THIRD_GRAY};
        filter: ${props => props.send === 'true' ? `drop-shadow(0 0 10px #219ebc)` : ''};
    }
    h2, p {
        margin: 0;
        line-height: 100%;
    }
`