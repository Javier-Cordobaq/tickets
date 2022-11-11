import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const LoginLayout = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;


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
    .email {
        height: 4rem;
        width: 4rem;
        position: absolute;
        left: -1rem;
        top: 1.5rem;
        z-index: -1;
        rotate: -20deg;
        color: #2D3138;
    }
    .magic {
        height: 4rem;
        width: 4rem;
        position: absolute;
        right: -1.8rem;
        bottom: 4rem;
        z-index: -1;
        color: #2D3138;
    }
    .link {
        height: 4rem;
        width: 4rem;
        position: absolute;
        left: -1.5rem;
        bottom: 0;
        z-index: -1;
        color: #2D3138;
        rotate: -85deg;
    }
    h2, p {
        margin: 0;
        line-height: 100%;
    }
`