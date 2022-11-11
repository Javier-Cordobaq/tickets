import styled from "styled-components";
import { PaleteColors } from "../palete-colors/palete-colors";

export const TicketLayout = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 2rem;

    .name_ticket {
        font-size: 1rem;
    }
    .ticket {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 25rem;
        background-color: white;
        border-radius: 2rem;
        position: relative;
        box-sizing: border-box;
        padding: 3rem 0;
        text-align: center;
        h2, p, h1 {
            margin: 0.3rem 0;
            color: #495057;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            height: 3rem;
            width: 9rem;
            background-color: ${PaleteColors.SECONDARY_GRAY};
            border-radius: 0 0 2rem 2rem;
        }
        &::before {
            content: '';
            position: absolute;
            bottom: -3rem;
            height: 3rem;
            width: 9rem;
            background-color: ${PaleteColors.WHITE};
            z-index: 1;
            border-radius: 0 0 2rem 2rem;
        }
        .bottom_background {
            position: absolute;
            bottom: -8rem;
            height: 8rem;
            width: 100%;
            background-color: ${PaleteColors.BACKGROUND_COLOR};
        }
    }
    .ticket_number_container {
        display: flex;
        justify-content: center;
        gap: 5px;
        font-size: 2rem;
    }

    @media (min-width: 768px){
        max-width: 300px;
    }

`