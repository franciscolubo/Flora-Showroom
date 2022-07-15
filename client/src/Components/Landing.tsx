import { Link } from 'react-router-dom'
import flora from '../images/Flora-Showroom.jpg'
import { LandingBackground, LandingDiv, SecondDiv } from './Landing.module'

const Landing = () => {
    return (
        <LandingDiv>
            <LandingBackground>
                <img src={flora} alt="imagen de fondo" />
            </LandingBackground>
            <SecondDiv>
                <h1>Flora Showroom</h1>
                <Link to='/home'>¡Ingresar!</Link>
            </SecondDiv>
        </LandingDiv>
    )
}

export default Landing