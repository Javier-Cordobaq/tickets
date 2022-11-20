import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const ClientBoxesLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${PaleteColors.SECONDARY_GRAY};
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 0.5rem;

    .card {
        border: 1px solid ${PaleteColors.BACKGROUND_COLOR};
        background-color: ${PaleteColors.BACKGROUND_COLOR};
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: 0.2s all;
        width: 100%;
        cursor: pointer;
        &:hover {
            border: 1px solid ${PaleteColors.PRIMARY_BLUE};
        }
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