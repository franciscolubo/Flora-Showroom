import styled from "styled-components";

export const ContainerCRUD = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: 600;
        letter-spacing: 1.5px;
        margin-top: 20px;
    }

    .list {
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                width: 100%;
                font-weight: 500;
                display: flex;
                justify-content: space-between;

                button {
                    background-color: #fff;
                    border: 1px solid red;
                    border-radius: 50px;
                    transition: background-color 400ms, color 400ms;
                }

                button:hover {
                    background-color: red;
                    color: #fff
                }
            }
        }
    }
`

export const FormStyled = styled.div`
    div {
        margin: 20px 0%;
        text-align: center;

        label {
            margin-bottom: 5px;
        }

        button {
            width: 100px;
            background-color: #fff;
            border: 1px solid #42F226;
            border-radius: 10px;
            transition: background-color 300ms;
        }

        button:hover {
            background-color: #42F226;
        }
    }
`