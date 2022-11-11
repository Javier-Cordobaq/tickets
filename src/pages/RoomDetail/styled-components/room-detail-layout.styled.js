import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const RoomDetailLayout = styled.div`

    display: flex;
    gap: 1rem;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 64px);

    .link_container {
        display: flex;
        gap: 1rem;
        align-items: center;
        width: auto;
        height: 2.5rem;
        p {
            display: flex;
            align-items: center;
            width: 10rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 100%;
            background-color: ${PaleteColors.SECONDARY_GRAY};
            border-radius: 2rem;
            box-sizing: border-box;
        }
    }

    img {
        width: 15rem;
        border-radius: 1rem;
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
        .table_container {
            width: 100%;
            min-height: 100vh;
        }
    }

    @media (min-width: 1536px){
        max-width: 1536px;
}
`