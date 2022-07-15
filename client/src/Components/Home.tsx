import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    }, [dispatch])

    return (
        <div>
            <Navbar />
            {
                clothes ? 
                <div>
                    <div>

                        {
                            clothes.map((clothe: CLOTHES, i: number) => {
                            return <div key={i}>
                                <h4>{clothe.title}</h4>
                                <img src={clothe.image} alt="Imagen de ropa" />
                                <p>{clothe.price}</p>
                                <p>{clothe.categorie}</p>
                                <Link to={'/'}>Detalles</Link>
                            </div>
                            })
                        }
                    </div>
                    <div>
                        {
                            pagination.map((i: number) => {
                                return <button key={i}>{i}</button>
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