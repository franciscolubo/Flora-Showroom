import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { deleteDetail, fetchIdClothes } from "../redux/slices/clotheSlice"
import { ContainerDetails, ImageDetail, InfoDetail } from "../styles/ClotheDetails.styles"
import { CLOTHES } from "../types"

export default function ClotheDetails() {
    const dispatch = useAppDispatch()
    const clotheId: CLOTHES = useAppSelector((state) => state.clothes.clotheId)
    const id: string = useParams().id as string

    useEffect(() => {
        if (clotheId._id === "") {
            dispatch(fetchIdClothes(id))
            console.log('carge')
        }
        console.log(clotheId)
        return () => { dispatch(deleteDetail()) }
    }, [])


    return (
        <div>
            {
                clotheId &&
                <ContainerDetails className="d-flex">
                    <ImageDetail>
                        <img src={clotheId.image} alt="Imagen de ropa" />
                    </ImageDetail>
                    <InfoDetail>
                        <h2>{clotheId.title}</h2>
                        <p>{clotheId.description}</p>
                        <div>
                            <p className="price">${clotheId.price} </p>
                            <p className="stock">/ {clotheId.stock}</p>
                        </div>
                        {
                            clotheId.size.map((size: string, i: number) => {
                                return <button key={i}>
                                    {size}
                                </button>
                            })
                        }
                        <button>
                            <Link to={`/form/${clotheId._id}`}>Edidat</Link>
                        </button>
                    </InfoDetail>
                </ContainerDetails>
            }
        </div>
    )
}