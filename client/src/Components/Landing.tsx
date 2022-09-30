import { Link } from 'react-router-dom'
import flora from '../images/Flora-Showroom.jpg'
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
    )
}

export default Landing