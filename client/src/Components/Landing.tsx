import { Link } from 'react-router-dom'
import flora from '../images/Flora-Showroom.jpg'
<<<<<<< HEAD
import { Container } from '../styles/Landing.styles'

const Landing = () => {
    return (
        <Container>
            <img src={flora} alt="imagen de fondo" />
            <div>
                <h1>Flora Showroom</h1>
                <p>Gracias por visitar mi pagina, <strong>presiona en ingresar</strong> y obtene todas las ropas ademas de sus precios</p>
                <Link to={'/home'}>Ingresar</Link>
            </div>
        </Container>
=======
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
>>>>>>> c5678f72e49e24243afc876f6638e45005e34d08
    )
}

export default Landing