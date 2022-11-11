import styled from "styled-components";

export const ResponsiveLayout = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    }
`