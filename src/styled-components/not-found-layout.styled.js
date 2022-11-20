import styled from "styled-components";
import { PaleteColors } from "../palete-colors/palete-colors";

export const NotFoundLayout = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);

    .not_found_content {
        width: 50%;
        height: 50%;
        text-align: center;
        img {
            width: 100%;
            height: 100%;
        }
        h1 {
            color: ${PaleteColors.LIGHT_GRAY};
            font-size: 2rem;
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