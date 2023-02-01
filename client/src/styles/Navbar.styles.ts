import styled from "styled-components";

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    background-color: #eeeee4;
    width: 100%;
    height: 8vh;
    align-items: end;
    padding-bottom: 7px;

    .options {
        button {
            margin-left: 15px;
            border: none;
            font-weight: 600;
            letter-spacing: .7px;
        }
        button:hover {
            text-decoration: underline;
        }

        div {
            position: absolute;
            visibility: hidden;
        }

        .categories:hover ~ div {
            visibility: visible;
        }
    }
`