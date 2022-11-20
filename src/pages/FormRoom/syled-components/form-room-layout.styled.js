import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const FormRoomLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 1rem;

    .form_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        gap: 1rem;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    h1 {
        margin: 0;
        text-align: center;
    }
    .fake_button {
        text-align: center;
        border: none;
        background-color: ${PaleteColors.PRIMARY_BLUE};
        color: ${PaleteColors.WHITE};
        font-size: 1rem;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        transition: 0.2s all;
        cursor: pointer;
        font-weight: bold;
        &:hover {
            background-color: ${PaleteColors.SECONDARY_BLUE};
        }
    }

    @media (min-width: 768px){
        .form_container {
            max-width: 350px;
        } 
    } 

`