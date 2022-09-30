import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchClothes } from '../redux/slices/clotheSlice'
import { CLOTHES } from '../types'
import Navbar from './Navbar'

const Home = () => {
    const dispatch = useAppDispatch()
    const clothes: CLOTHES[] = useAppSelector((state) => state.clothes.clothes)
    const allPages: number = useAppSelector((state) => state.clothes.allPages)
    const page = useAppSelector((state) => state.clothes.page)


    console.log(location.href === 'http://localhost:3000/home')

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
                                        return <div key={i} className="col mb-5">
                                            <div className="card h-100">
                                                <h4>{clothe.title}</h4>
                                                <img src={clothe.image} alt="Imagen de ropa" />
                                                <p>{clothe.price}</p>
                                                <p>{clothe.categorie}</p>
                                                <Link to={`/detail/${clothe._id}`}>Detalles</Link>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            {
                                pagination.map((i: number) => {
                                    return <button onClick={() => dispatch(fetchClothes(i))} key={i}>{i}</button>
                                })
                            }
                        </div>
                    </div>
                    : <h2>loading</h2>
            }
        </div>
    )
}

export default Home