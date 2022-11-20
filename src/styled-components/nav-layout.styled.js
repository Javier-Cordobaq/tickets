import styled from "styled-components";
import { PaleteColors } from "../palete-colors/palete-colors";

export const NavLayout = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    padding: 0 1rem;

    p {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }
    h1, p {
        margin: 0;
    }
    .menu_container {
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 2rem;
        padding: 0 1rem;
        background-color: ${PaleteColors.LIGHT_GRAY};
        height: 40px;
        p {
            display: none;
        }
        &:hover {
            background-color: ${PaleteColors.SECONDARY_GRAY};
        }
    }
    .menu_icon {
        font-size: 1.4rem;
    }
    .rutes_container {
       display: none;
       z-index: 100;
    }
    .menu {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        cursor: pointer;
        position: relative;
    }
    .menu:hover .rutes_container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 64px;
        right: 0;
        background-color: ${PaleteColors.SECONDARY_GRAY};
        box-sizing: border-box;
        padding: 1rem 2rem;
        width: 15rem;
        height: auto;
        border-radius: 1rem;
        box-shadow: 0 0 20px ${PaleteColors.BACKGROUND_COLOR};
        a {
            display: flex;
            align-items: center;
            gap: 10px;
            transition: 0.3s all;
            &:hover {
                border-right: 2px solid ${PaleteColors.LIGHT_GRAY};
            }
        }
        .icon {
            font-size: 2rem;
        }
        .logout {
            color: ${PaleteColors.PRIMARY_RED};
        }
        .profile {
            color: ${PaleteColors.ORANGE_PRIMARY};
        }
        .home {
            color: ${PaleteColors.PRIMARY_BLUE};
        }
        .description {
            font-size: 0.8rem;
            color: gray;
        }
    }

    @media (min-width: 560px){
        .menu_container {
            p {
                display: flex;
            }
            
        }
    }

`