import styled from "styled-components";

export const DetailMeetingLayout = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 1rem;
    .row {
        width: 100%;
        box-shadow: 0 0px 2px gray;
        box-sizing: border-box;
        padding: 0.5rem 1rem;
    }
    .buttons_container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        width: 100%;
    }
    h2 {
        margin: 0;
    }
    p {
        margin: 5px 0;
    }
    .title {
        font-weight: bold;
    }
    button {
        margin-top: 12px;
    }

    @media (min-width: 768px){
        max-width: 350px;
    }

`