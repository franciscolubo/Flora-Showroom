import { Link } from 'react-router-dom'
import flora from '../images/Flora-Showroom.jpg'
import { Container } from '../styles/Landing.styles'

const Landing = () => {
    return (
        <Container>
            <img src={flora} alt="imagen de fondo" />
            <div>
                <h1>Flora Showroom</h1>
                <p>Bienvenida a mi tienda, enterate de todas las ofertas y prendas que tenemos para <strong>vos</strong>.</p>
                <Link to={'/home'}>Ingresar</Link>
            </div>
        </Container>
    )
}

export default Landing