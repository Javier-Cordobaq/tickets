import styled from "styled-components";
import { motion } from "framer-motion";
import { PaleteColors } from "../palete-colors/palete-colors";

export const Button = styled(motion.button) `

    border: none;
    background-color: ${PaleteColors.PRIMARY_BLUE};
    color: ${PaleteColors.WHITE};
    font-size: 0.8rem;
    border-radius: 2rem;
    padding: 0.3rem 1.5rem;
    transition: 0.2s all;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: ${PaleteColors.SECONDARY_BLUE};
    }

    @media (min-width: 1280px){
        max-width: 1280px;
        font-size: 1rem;
        padding: 0.5rem 2rem;
    }

`