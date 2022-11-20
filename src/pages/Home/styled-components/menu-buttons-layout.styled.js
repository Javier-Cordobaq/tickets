import styled from "styled-components";
import { motion } from "framer-motion";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const MenuButtonsLayout = styled(motion.div)`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    height: auto;

    .button_container {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        border-radius: 0.3rem;
        background-color: ${PaleteColors.PRIMARY_BLUE};
        font-size: 1rem;
        transition: 0.2s;
        box-sizing: border-box;
        padding: 0.8rem 1.5rem;
        p {
            text-align: left;
            border: none;
            background-color: transparent;
            color: ${PaleteColors.WHITE};
            width: auto;
            cursor: pointer;
            font-weight: bold;
            margin: 0;
        }
        .button_icon {
            font-size: 1rem;
        }
        &:hover {
            background-color: ${PaleteColors.SECONDARY_BLUE};
        }
    }
    .actions_container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin-top: 1.5rem;
        .turno_button {
            border: 1px solid ${PaleteColors.LIGHT_GRAY};
            color: ${PaleteColors.LIGHT_GRAY};
            border-radius: 0.3rem;
            font-size: 1.8rem;
            transition: 0.2s all;
            padding: 0.3rem 1rem;
            overflow: visible;
            &:hover {
                border: 1px solid ${PaleteColors.SECONDARY_GRAY};
                color: ${PaleteColors.SECONDARY_GRAY};
            }
        }
    }
    .text_container {
        box-sizing: border-box;
        h2 {
            margin: 0;
            line-height: 100%;
            font-size: calc(4.5em - 4.5vh);
        }
        p {
            margin-top: 1.5rem;
            color: ${PaleteColors.LIGHT_GRAY};
        }
    }

    @media (min-width: 1280px){
        width: 50%;
        height: 100%;
        padding: 0 4rem 0 0;
        .button_container {
            /* font-size: 1.9rem;
            .button_icon {
                font-size: 1.2rem;
            } */
        }
        .actions_container {
            overflow: hidden;
            align-items: flex-start;
            flex-direction: row;
        }
    }

    @media (min-width: 1536px){
        .text_container {
            box-sizing: border-box;
            h2 {
                margin: 0;
                line-height: 100%;
                font-size: 3.5rem;
            }
        }
    }

`