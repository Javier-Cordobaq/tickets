import styled from "styled-components";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const FormCashier = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;

    .form_container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        max-width: 18rem;
    }

    .select_stylized {
        border-radius: 2rem;
        box-sizing: border-box;
        padding: 0.7rem 1.5rem;
        background-color: ${PaleteColors.BACKGROUND_COLOR};
        outline: none;
        color: ${PaleteColors.WHITE};
        border: none;
        color: gray;
    }
 

`
