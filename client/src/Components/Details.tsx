import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchIdClothes } from "../redux/slices/clotheSlice"
import { CLOTHES } from "../types"

export default function Details() {
    const dispatch = useAppDispatch()
    const clotheId: CLOTHES = useAppSelector((state) => state.clothes.clotheId)
    const id: string = useParams().id as string

    useEffect(() => {
        dispatch(fetchIdClothes(id))
    }, [])
    console.log(clotheId)
    return (
        <div>
            {
                clotheId &&
                <div>
                    <h2>{clotheId.title}</h2>
                    <img src={clotheId.image} alt="Imagen de ropa" />
                    <p>{clotheId.description}</p>
                    <p>${clotheId.price}</p>
                    <p>{clotheId.stock}</p>
                </div>

            }
        </div>
    )
}