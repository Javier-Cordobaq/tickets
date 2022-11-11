import styled from "styled-components";

export const CategorieLayout = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 1rem;
    button {
        width: 100%;
    }
    .buttons_container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        width: 100%;
    }
    h1 {
        margin: 1.5rem 0;
    }

    @media (min-width: 768px){
        max-width: 300px;
    }

`