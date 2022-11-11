import styled from "styled-components";
import { motion } from "framer-motion";
import { PaleteColors } from "../palete-colors/palete-colors";

export const Button = styled(motion.button) `

    border: none;
    background-color: ${PaleteColors.PRIMARY_BLUE};
    color: ${PaleteColors.WHITE};
    font-size: 1rem;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    transition: 0.2s all;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: ${PaleteColors.SECONDARY_BLUE};
    }

`