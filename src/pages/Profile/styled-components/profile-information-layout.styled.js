import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const ProfileInformationLayout = styled.div`

    box-sizing: border-box;
    padding: 1rem;
    margin-bottom: 1rem;
    grid-column: span 5;
    background-color: ${PaleteColors.SECONDARY_GRAY};
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 1rem;

    p {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    }
    .profile_picture_container {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 1rem;
        img {
            background-color: ${PaleteColors.LIGHT_GRAY};
            border-radius: 50%;
            width: 50%;
        }
    }
    h2 {
        margin: 0;
    }

    @media (min-width: 768px){
        max-width: 100%;
    }

    @media (min-width: 1280px){
        max-width: 20%;
    }

    @media (min-width: 1536px){
        
    }

`