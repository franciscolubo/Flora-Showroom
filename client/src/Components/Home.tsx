import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchClothes, fetchIdClothes } from '../redux/slices/clotheSlice'
import { CLOTHES } from '../types'
import { HomeCard, HomeContainer, Pagination, Title } from '../styles/Home.styles'
import Navbar from './Navbar'

const Home = () => {
    const dispatch = useAppDispatch()
    const clothes: CLOTHES[] = useAppSelector((state) => state.clothes.clothes)
    const allPages: number = useAppSelector((state) => state.clothes.allPages)
    const page = useAppSelector((state) => state.clothes.page)
    const cat = useAppSelector((state) => state.clothes.cat)
    const allClothes = useAppSelector((state) => state.clothes.allClothes)

    let pagination: number[] = []
    if (allPages > 0) {
        for (let i = 1; i <= allPages; i++) {
            pagination.push(i)
        }
    }
    useEffect(() => {
        dispatch(fetchClothes(page, cat))
    }, [])

    const handlePage = (numPage: number) => {
        if (numPage === -1 && page > 1 || numPage === 1 && page < allPages)
            dispatch(fetchClothes((+page + numPage), cat))
    }

    return (
        <HomeContainer>
            {
                clothes ?
                    <div className="py-5">
                        <div className='title'>
                            {
                                cat === "" ? <Title>TODOS LOS PRODUCTOS</Title>
                                    : <Title>{cat.toUpperCase()}</Title>
                            }
                            <p>({allClothes})</p>
                        </div>
                        <div className="container px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                {
                                    clothes.map((clothe: CLOTHES, i: number) => {
                                        return <HomeCard key={i} className="col mb-5" onClick={() => {
                                            dispatch(fetchIdClothes(clothe._id!))

                                        }}>
                                            <div className="card h-100">
                                                <img src={clothe.image} alt="Imagen de ropa" />
                                                <p className="price">${clothe.price}</p>
                                                <h4>{clothe.title}</h4>
                                                <p className="categorie">{clothe.categorie}</p>
                                            </div>
                                        </HomeCard>
                                    })
                                }
                            </div>
                        </div>
                        <Pagination>
                            <button onClick={() => handlePage(-1)} className={+page <= 1 ? "disabled" : "eneabled"} >ANTERIOR</button>
                            {
                                screen.width >= 1000 ?
                                    <div>
                                        <p>Pagina:</p>

                                        <select onChange={(e) => dispatch(fetchClothes(+e.target.value, cat))}>
                                            {
                                                pagination.map((i: number) => {
                                                    if (+page === i) {
                                                        return <option value={i} selected key={i}>{i}</option>
                                                    } else {
                                                        return <option value={i} key={i}>{i}</option>
                                                    }
                                                }
                                                )
                                            }
                                        </select>

                                        <p>de {allPages}</p>
                                    </div>
                                    :
                                    <div>
                                        <p>{page}/{allPages}</p>
                                    </div>
                            }
                            <button onClick={() => handlePage(1)} className={+page >= allPages ? "disabled" : "eneabled"} >SIGUIENTE</button>
                        </Pagination>
                    </div>
                    : <h2>loading</h2>
            }
            <Navbar />
        </HomeContainer>
    )
}

export default Home