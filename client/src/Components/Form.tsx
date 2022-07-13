import React, { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchClothes, fetchIdClothes } from "../redux/slices/clotheSlice";
import { CLOTHES, ClothesReducer } from "../types";

const Form: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const { title, categorie, image, price, stock, description }: CLOTHES = useAppSelector((state) => state.clothes.clotheId)
    const id: string = useParams().id as string
    const [form, setForm] = useState<CLOTHES>({
        title: !title ? "" : title,
        image: !image ? "" : image,
        price: price === 0 ? 0 : price,
        stock: stock === 0 ? 0 : stock,
        categorie: !categorie ? "" : categorie,
        description: !description ? "" : description
    })

    useEffect(() => {
        if (Number(id) !== 0) {
            dispatch(fetchIdClothes(id))
        }
    }, [dispatch])
    console.log(title, form)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Form</h2>

            <form>
                <span>Titulo</span>
                <input type='text' name="title" placeholder="Titulo" value={form.title} onChange={handleChange}/>
                
                <span>URL Imagen</span>
                <input type="url" name="image" placeholder="Imagen" value={form.image} onChange={handleChange}/>
                
                <span>Precio</span>
                <input type="number" name="price" placeholder="Precio" value={form.price === 0 ? "" : form.price} onChange={handleChange}/>
                
                <span>Stock</span>
                <input type="text" name="stock" placeholder="Stock" value={form.stock === 0 ? "" : form.stock} onChange={handleChange}/>
                
                <span>Categoria</span>
                <input type="text" name="categorie" placeholder="Categoria" value={form.categorie} onChange={handleChange}/>
                
                <span>Descripción</span>
                <input type="text-area" name="description" placeholder="Descripción" value={form.description} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Form

function useApoDispatch(): any {
    throw new Error("Function not implemented.");
}
