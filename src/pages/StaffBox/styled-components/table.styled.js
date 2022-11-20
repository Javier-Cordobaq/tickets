import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const Table = styled.table`

    width: 100%;
    height: auto;
    overflow-x: auto;
    box-sizing: border-box;
    border-collapse: collapse;
    min-width: 850px;
    overflow: hidden;

    tr {
        border: 1px solid ${PaleteColors.LIGHT_GRAY};
        &:nth-child(even) {
            border-radius: 1rem;
        }
    }
    
    th {
        text-align: left;
        box-sizing: border-box;
        padding: 15px 10px;
        min-width: auto;
        color: gray;
    }
    td {
        box-sizing: border-box;
        padding: 15px 10px;
        height: auto;
        min-width: fit-content;
    }

    .header {
        th {
            text-align: right;
        }
    }
    .searchbar {
        background-color: ${PaleteColors.BACKGROUND_COLOR};
    }
    .action_column {
        display: flex;
        gap: 1rem;
    }
    .actions_button {
        font-size: 1.5rem;
        color: ${PaleteColors.WHITE};
        background-color: ${PaleteColors.LIGHT_GRAY};
        border-radius: 5px;
        padding: 5px;
        transition: 0.2s all;
        cursor: pointer;
        &:hover {
            background-color: ${PaleteColors.LIGHT_GRAY};
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