import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const Filters = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 850px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${PaleteColors.LIGHT_GRAY};

    .searchbar {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 3rem;
        input {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    .filters {
        p {
            margin: 0;
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