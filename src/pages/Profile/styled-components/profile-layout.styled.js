import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const ProfileLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 1rem;

    .button_container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        background-color: ${PaleteColors.PRIMARY_BLUE};
        font-size: 1.5rem;
        transition: 0.2s;
        &:hover {
            background-color: ${PaleteColors.SECONDARY_BLUE};
        }
        button {
            text-align: left;
            border: none;
            background-color: transparent;
            color: ${PaleteColors.WHITE};
            font-size: calc(0.8em - 0.8vw);
            cursor: pointer;
        }
        .plus_icon {
            font-size: calc(0.8em - 0.8vw);
        }
    }
    .rooms_header_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h1 {
        margin: 0;
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        height: calc(100vh - 64px);
        max-width: 1280px;
        flex-direction: row;
        .button_container {
            font-size: 2rem;
        }
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }

`