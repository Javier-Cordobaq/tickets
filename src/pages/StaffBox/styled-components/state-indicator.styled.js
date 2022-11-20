import styled from "styled-components";
import { motion } from "framer-motion";
import { PaleteColors } from "../../../palete-colors/palete-colors";

export const StateIndicator = styled.button `

    border: none;
    background-color: ${props => props.state === 'en proceso' ? PaleteColors.SECONDARY_BLUE : props => props.state === 'sin atender' ? PaleteColors.ORANGE_PRIMARY : PaleteColors.SECONDARY_RED};
    color: ${props => props.state === 'en proceso' ? PaleteColors.PRIMARY_BLUE : props => props.state === 'sin atender' ? PaleteColors.ORANGE_SECONDARY : PaleteColors.PRIMARY_RED};
    border-radius: 2rem;
    padding: 0.3rem 0.5rem 0.3rem 1.3rem;
    transition: 0.2s all;
    cursor: pointer;
    width: auto;
    max-width: 12rem;
    position: relative;
    font-weight: bold;
    text-transform: uppercase;

    &::before {
        content:'';
        position: absolute;
        left: 7px;
        top: 8px;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.state === 'en proceso' ? PaleteColors.PRIMARY_BLUE : props => props.state === 'sin atender' ? PaleteColors.ORANGE_SECONDARY : PaleteColors.PRIMARY_RED};
    }

    &:hover {
        box-shadow: ${props => props.state === 'en proceso' ? `0 0 10px ${PaleteColors.ORANGE_SECONDARY}` : props => props.state === 'sin atender' ? `0 0 10px ${PaleteColors.PRIMARY_BLUE}` : `0 0 10px ${PaleteColors.PRIMARY_RED}`};
    }

`