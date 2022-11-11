import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const ProfileLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 1rem;

    .client_box_container{
        box-sizing: border-box;
        padding: 1rem;
        margin-bottom: 1rem;
        grid-column: span 5;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 1rem;
    }
    .personal_info {
        box-sizing: border-box;
        padding: 1rem;
        margin-bottom: 1rem;
        grid-column: span 5;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 1rem;
    }
    .rooms_container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        grid-column: span 2;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 1rem;
    }
    .ticket_container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        box-sizing: border-box;
        padding: 1rem;
        margin-bottom: 1rem;
        grid-column: span 2;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        width: 100%;
        height: calc(100vh - 64px);
        overflow: auto;
        max-height: 100%;
        border-radius: 1rem;
    }
    .card_container {
        border: 1px solid ${PaleteColors.BACKGROUND_COLOR};
        background-color: ${PaleteColors.BACKGROUND_COLOR};
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: 0.2s all;
        width: 100%;
        cursor: pointer;
        &:hover {
            background-color: ${PaleteColors.SECONDARY_GRAY};
        }
    }
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
        max-width: 1280px;
        flex-direction: row;
        .personal_info {
            max-width: 20%;
        }
        .rooms {
            max-width: 40%;
        }
        .ticket_container {
            max-width: 40%;
        }
        .button_container {
            font-size: 2rem;
        }
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }

`