import styled from "styled-components";

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    width: 100%;
    height: 8vh;
    align-items: end;
    border-bottom: 1px solid #ccc;

    .options {
        .nav-buttons {
            margin-left: 15px;
            font-weight: 700;
            letter-spacing: 1.2px;
            background-color: transparent;
            padding-bottom: 10px;
            border: 2px solid transparent;
            font-size: 14px;
        }
        .nav-buttons:hover {
            border-bottom: 2px solid #000;
        }

        .categories:hover ~ .categorieSelector {
            visibility: visible;
        }

        .redes-sociales {
            font-weight: 400;
            letter-spacing: 1.2px;
        }
    }

`

export const CategorieSelector = styled.div`
        position: absolute;
        visibility: hidden;
        background-color: #fff;
        width: 100%;
        height: 30vh;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-top: 1px solid #ccc;

        &:hover {
            visibility: visible;
        }

        .categories-div {
            padding: 10px;
            height: 100%;
            width: 70%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
                button { 
                    width: auto;
                    color: #000;
                    border: none;
                    background-color: transparent;
                    font-weight: 200;
                    font-size: 14px;
                    letter-spacing: 0.8px;
                }

                button:hover {
                    text-decoration: underline #000;
                }
        }

        .all-clothes {
            width: 100%;
            display: flex;
            justify-content: center;
            border-top: 1px solid #ccc;
            padding: 10px 0px;

            button {
                border: none;
                background-color: transparent;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: .5px;
            }

            button:hover {
                text-decoration: underline #000;
            }
        }
`

export const SearchBar = styled.div`
    background-color: #ECEFF1;
    margin-bottom: 10px;
    
    input[type="search"]::-webkit-search-cancel-button {
        display: none;
    }
    
    input {
        width: 85%;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 6px 0 6px 10px;
        border: 1px solid transparent;
        transition: border .8s;
    }
    
    button {
        width: 15%;
        height: 100%;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 6px;
        transition: border .8s;
    }

    input:focus {
        border: 1px solid black;
        border-right: 1px solid transparent;
    }

    input:focus ~ button {
        border: 1px solid black;
        border-left: 1px solid transparent;
    }

`