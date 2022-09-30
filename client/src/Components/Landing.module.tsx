import styled from 'styled-components'

export const LandingDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const LandingBackground = styled.div`
    flex: .7;

    img {
        width: 100%;
    }

    @media screen and (min-width: 425px) {
        flex: .2;
    }
`

export const SecondDiv = styled.div`
    flex: .3;
    background: #f6f6e9;
    width: 100%;
    align-content: center;
    padding: 0.3rem 0;

    h1{
        font-size: 2rem;
        font-weight: 600;  
        letter-spacing: 0.2rem;
        color: #eab63d;
        margin-left: 0.5rem;
    }
    
    a{
        width: 50%;
        margin-left: 3rem;
        cursor: pointer;
        color: #575335;
        text-decoration: none;
    }

    @media screen and (min-width: 450px) {
        flex: .8;
    }
`