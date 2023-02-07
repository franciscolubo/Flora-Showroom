import styled from "styled-components";

export const ContainerDetails = styled.div`
    flex-direction: column;
`

export const ImageDetail = styled.div`
    width: 60%;
    height: 50vh;
    padding: 10px;

    img {
        height: 100%;
        width: 100%;
    }
`

export const InfoDetail = styled.div`
    width: 100%;
    height: 50vh;
    padding: 10px;

    h2 {
        font-weight: 600;
        letter-spacing: 0.5px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }

    p {
        letter-spacing: 0.3px;
        margin-top: 5px;
    }

    .price {
        font-weight: 600;
        font-size: 20px;
    }

    div {
        display: flex;
        align-content: flex-end;
    }
`