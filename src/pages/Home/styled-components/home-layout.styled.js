import styled from "styled-components";

export const HomeLayout = styled.div`

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
        flex-direction: row;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }
`