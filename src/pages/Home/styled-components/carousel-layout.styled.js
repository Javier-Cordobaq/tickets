import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const CarouselLayout = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: auto;
        width: 15rem;
        .img_container {
            display: grid;
            place-items: center;
            width: 15rem;
            height: 15rem;
            border-radius: 50%;
            background-color: ${PaleteColors.SECONDARY_BLUE};
            overflow: hidden;
        }
        img {
            width: 100%;
        }
        h2 {
            line-height: 100%;
        }
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
        width: 50%;
        height: 100%;
        .section {
           width: 23rem;
           .img_container {
               width: 20rem;
               height: 20rem;
           }
        }
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }
`