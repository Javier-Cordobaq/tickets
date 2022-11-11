import styled from "styled-components";
import { motion } from "framer-motion";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const MenuButtonsLayout = styled(motion.div)`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 250px;
    box-sizing: border-box;
    padding: 0.5rem;

    button {
        text-align: left;
        border: none;
        background-color: transparent;
        color: ${PaleteColors.WHITE};
        font-size: calc(1em - 1vw);
        width: 8rem;
        cursor: pointer;
    }

    .button_container {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        box-sizing: border-box;
        padding: 0.5rem 2rem;
        border-radius: 0.3rem;
        background-color: ${PaleteColors.PRIMARY_BLUE};
        font-size: 1.5rem;
        transition: 0.2s;
        &:hover {
            background-color: ${PaleteColors.SECONDARY_BLUE};
        }
    }

    @media (min-width: 1280px){
        .button_container {
            font-size: 2rem;
        }
    }

`