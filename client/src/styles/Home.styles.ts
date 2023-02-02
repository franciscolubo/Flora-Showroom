import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

export const HomeCard = styled.div`
    max-width: 40vh;
    height: 40vh;
    max-height: 40vh;

    img {
        width: 100%;
        height: 80%;
    }
    
    .price {
        position: absolute;
        bottom: 15%;
        left: 5px;
        background-color: white;
        padding: 0px 5px;
        color: #000;
        transition: all .3s;
    }

    h4 {
        font-weight: 400;
        font-size: 18px;
        padding: 5px 0px 0px 10px
    }

    .categorie {
        font-weight: 300;
        font-size: 15px;
        padding-left: 10px;
    }
    
    div:hover {
        border: 1px solid black;

        .price {
            bottom: 70px;
        }
    }
`

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 85%;

    div {
        display: flex;
        justify-content: center;
    }

    p {
        margin: auto 10px;
        letter-spacing: 0.25px;
    }

    select {
        width: 50px;
        height: 50px;
        padding-left: 10px;
        border: .5px solid #ccc;
        cursor: pointer;
        box-shadow: none;

        option {
            height: 50px;
        }
    }

    button {
        border: none;
        background-color: transparent;
        font-weight: 600;
        text-decoration: underline;
        font-size: 16px;
        letter-spacing: 1px;
        transition: all 200ms;
        color: #000;
    }

    button:hover {
        background-color: #000;
        color: #fff;
        text-decoration: none;
    }

    .disabled {
        visibility: hidden;
    }

`