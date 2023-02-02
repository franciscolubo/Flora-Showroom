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
            font-weight: 600;
            letter-spacing: .7px;
            background-color: transparent;
            padding-bottom: 10px;
            border-top: none;
            border-right: none;
            border-left: none;
            border-bottom: 2px solid transparent;
        }
        .nav-buttons:hover {
            border-bottom: 2px solid #000;
        }

        .categories:hover ~ .categorieSelector {
            visibility: visible;
        }

        .redes-sociales {
            font-weight: 400;
        }
    }

`

export const CategorieSelector = styled.div`
        position: absolute;
        visibility: hidden;
        background-color: #fff;
        width: 100%;
        height: 20vh;
        left: 0;
        display: flex;
        justify-content: center;
        border-top: 1px solid #ccc;

        &:hover {
            visibility: visible;
        }

        div {
            padding: 10px;
            height: 100%;
            width: 70%;
            display: flex;  
            flex-direction: wrap;
            flex-wrap: wrap;
                button { 
                    width: auto;
                    height: 15%;
                    color: #000;
                    border: none;
                    background-color: transparent;
                    font-weight: 200;
                    font-size: 20px;
                    letter-spacing: 0.8px;
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