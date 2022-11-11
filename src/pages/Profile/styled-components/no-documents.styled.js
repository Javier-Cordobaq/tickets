import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const NoDocuments = styled.div`

    display: flex;
    text-align: center;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 100%;
    color: ${PaleteColors.BACKGROUND_COLOR};
    font-weight: bold;
    .files_icon {
        font-size: 4rem;
    }
    p {
        margin: 0;
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        height: 100%;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }

`