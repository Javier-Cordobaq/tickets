import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const TableLayout = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 1rem;

    .card_container {
        display: flex;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        border-bottom: 1px solid ${PaleteColors.BACKGROUND_COLOR};
        padding: 1rem;
        box-sizing: border-box;
        width: auto;
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }
    
`