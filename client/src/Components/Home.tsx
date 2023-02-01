import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchClothes } from '../redux/slices/clotheSlice'
import { CLOTHES } from '../types'
import Navbar from './Navbar'
import { HomeCard, Pagination } from '../styles/Home.styles'

const Home = () => {
    const dispatch = useAppDispatch()
    const clothes: CLOTHES[] = useAppSelector((state) => state.clothes.clothes)
    const allPages: number = useAppSelector((state) => state.clothes.allPages)
    const page = useAppSelector((state) => state.clothes.page)

    let pagination: number[] = []
    if (allPages > 0) {
        for (let i = 1; i <= allPages; i++) {
            pagination.push(i)
        }
    }
    useEffect(() => {
        dispatch(fetchClothes(page))
    }, [])
    return (
        <div>
            <Navbar />
            {
                clothes ?
                    <div className="py-5">
                        <div className="container px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                {
                                    clothes.map((clothe: CLOTHES, i: number) => {
                                        return <HomeCard key={i} className="col mb-5">
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
                            <button onClick={() => dispatch(fetchClothes(+page - 1))} className={+page === 1 ? "disabled" : "eneabled"} >ANTERIOR</button>
                            {
                                screen.width >= 1000 ?
                                    <div>
                                        <p>Pagina:</p>

                                        <select onChange={(e) => dispatch(fetchClothes(+e.target.value))}>
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

                                        <p>de {pagination.length}</p>
                                    </div>
                                    :
                                    <div>
                                        <p>{page}/{pagination.length}</p>
                                    </div>
                            }
                            <button onClick={() => dispatch(fetchClothes(+page + 1))} className={+page === pagination[pagination.length - 1] ? "disabled" : "eneabled"} >SIGUIENTE</button>
                        </Pagination>
                    </div>
                    : <h2>loading</h2>
            }
        </div>
    )
}

export default Home