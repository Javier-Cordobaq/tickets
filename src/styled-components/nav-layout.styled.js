import styled from "styled-components";

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
        gap: 5px;
        cursor: pointer;
    }
    h1, p {
        margin: 0;
    }

    @media (min-width: 1280px){
        padding: 0 3rem;
    }

`