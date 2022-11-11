import styled from "styled-components";

export const GetTicketsLayout = styled.div`

    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);

   /*  .desciption_pc {
        display: none;
    }
    .video_movil {
        display: none;
    }
    .video_pc {
            display: none;
    } */
    .video_pc {
        display: none;
    }
    .desciption_pc {
        display: none;
    }
    .video_container {
        background-color: gray;
        height: 12rem;
        width: 20rem;
        border-radius: 0.4rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
    }

    @media (min-width: 768px){
        max-width: 768px;
        flex-direction: row;
        .container {
           width: 50%;
        }
        .video_pc {
            display: block;
        }
        .desciption_pc {
            display: block;
        }
        .video_movil {
            display: none;
        }
        .desciption_movil {
            display: none;
        }
    }

    /* @media (min-width: 1280px){
        max-width: 1280px;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
    } */
`