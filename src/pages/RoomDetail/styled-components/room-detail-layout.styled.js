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
    
    .details_shareMethods {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        min-height: 100vh;
    }
    .section {
        background-color: ${PaleteColors.SECONDARY_GRAY};
        border-radius: 1rem;
        box-sizing: border-box;
        padding: 1rem;
        height: auto;
    }
    h1 {
        margin: 0;
        font-size: calc(1em -1vh);
    }
    .link_container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        width: auto;
        height: auto;
        p {
            display: flex;
            align-items: center;
            width: 10rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 5px 10px;
            background-color: ${PaleteColors.BACKGROUND_COLOR};
            border-radius: 2rem;
            box-sizing: border-box;
            margin: 0;
        }
        h2 {
            margin: 0;
        }
    }
    .qrCode_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .qrCode {
        background: linear-gradient(90deg, #2a9d8f 0%, #264653 80%);
        box-sizing: border-box;
        padding: 1rem;
        border-radius: 3rem;
        margin-bottom: 1.5rem;
        width: 15rem;
        img {
            width: 100%;
            border-radius: 2rem;
        }
    }
    .table_container {
        width: 100%;
        min-height: 100vh;
    }
    .options_container {
        width: 100%;
        background-color: aliceblue;
    }
    .share_cashiers_section {
        width: 100%;
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
        .details_shareMethods {
            flex-direction: row;
        }
        .options_container {
            width: 80%;
        }
        .share_cashiers_section {
            width: 80%;
        }
    }

    @media (min-width: 1536px){
        max-width: 1536px;
}
`