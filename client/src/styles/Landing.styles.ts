import styled from 'styled-components'

export const Container = styled.div`
    background-color: #eeeee4;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    img {
        flex: 0.7;
    }
    
    div {
        flex: 0.3;
        text-align: center;
        padding: 40px 5px 0 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        
        h1 {
            font-weight: 700;
            letter-spacing: 2px;
            color: #a26b28;
            margin: auto;
        }
        
        p {
            font-weight: 300;
            margin: 30px 0;
        }
        
        a {
            position: relative;
            text-decoration: none;
            color: #000;
            letter-spacing: 1px;
            padding-top: 20px;
            font-weight: 500;
            transition: all .3s;
            padding: 5px;
            border-radius: 10px;
        }

        a:hover {
            background-color: #000;
            color: #fff;
        }
}

    

    @media screen and (min-width: 450px) {
        img {
            height: 70%;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
        }

        div {
            flex: 1;
            
            h1 {
                font-weight: 800;
                letter-spacing: 3px;
            }

            p {
                padding: 0 15px;
                font-weight: 400;
            }
        }
    }

    @media screen and (min-width: 550px) {
        flex-direction: row-reverse;
        
        img {
            flex: 0.6;
            height: 100%;
            width: 65%;
        }

        div {
            box-shadow: none;
            flex: 0.4;
            margin: auto;

            h1 {
                font-size: 35px;
                padding-bottom: 70px;
            }

            p {
                font-size: 18px;
                letter-spacing: 0.8px;
                padding: 30px 0;
            }
            
            a {
                font-size: 22px;
            }
        }
    }

    @media screen and (min-width: 900px) {
        div {
            h1 {
                font-size: 45px;
            }

            p {
                font-size: 22px;
            }

            a {
                font-size: 25px;
            }
        }
    }
`;