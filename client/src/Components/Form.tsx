import React, { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchClothes, fetchIdClothes } from "../redux/slices/clotheSlice";
import { CLOTHES, ClothesReducer } from "../types";

const Form: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const { title, categorie, image, price, stock, description, size }: CLOTHES = useAppSelector((state) => state.clothes.clotheId)
    const id: string = useParams().id as string
    const [form, setForm] = useState<CLOTHES>({
        title: !title ? "" : title,
        image: !image ? "" : image,
        price: price === 0 ? 0 : price,
        stock: stock === 0 ? 0 : stock,
        categorie: !categorie ? "" : categorie,
        description: !description ? "" : description,
        size: size.length === 0 ? [] : size
    })

    console.log(id)
    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchIdClothes(id))
        }
    }, [dispatch])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
        setForm({
            ...form,
            size: [...form.size].concat(e.target.value)
        })
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div>
            <h2>Form</h2>

            <form onSubmit={handleSubmit}>
                <span>Titulo</span>
                <input type='text' name="title" placeholder="Titulo" value={form.title} onChange={handleChange} />

                <span>URL Imagen</span>
                <input type="url" name="image" placeholder="Imagen" value={form.image} onChange={handleChange} />

                <span>Precio</span>
                <input type="number" name="price" placeholder="Precio" value={form.price === 0 ? "" : form.price} onChange={handleChange} />

                <span>Stock</span>
                <input type="text" name="stock" placeholder="Stock" value={form.stock === 0 ? "" : form.stock} onChange={handleChange} />

                <span>Categoria</span>
                <input type="text" name="categorie" placeholder="Categoria" value={form.categorie} onChange={handleChange} />

                <span>Descripción</span>
                <input type="text-area" name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />

                <span>Tamaños disponibles</span>
                <select onChange={handleSelect}>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>

                <button>
                    Press!
                </button>
            </form>
        </div>
    )
}

export default Form
