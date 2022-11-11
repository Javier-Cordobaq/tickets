import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const PersonalInfoLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 1rem 3rem;
    h2 {
        margin: 0;
        margin-bottom: 1rem;
    }
    p {
        margin: 5px 0;
    }
    .form_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px){
        max-width: 350px;
        padding: 1rem;
    }

`