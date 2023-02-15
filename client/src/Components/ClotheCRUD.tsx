import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import formValidate from "../helpers/formValidate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { postClothes } from "../redux/slices/clotheSlice";
import { ContainerCRUD, FormStyled } from "../styles/ClotheCRUD.styles";
import { CLOTHES, stateClothes } from "../types";

export default function ClotheCRUD() {
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()
    const { title, image, price, stock, categorie, description, size, discount }: CLOTHES = useAppSelector((state: stateClothes) => state.clothes.clotheId)
    const [form, setForm] = useState<CLOTHES>({
        title: !title ? "" : title,
        image: !image ? [] : image,
        price: !price ? 0 : price,
        stock: !stock ? 0 : stock,
        categorie: !categorie ? "" : categorie,
        description: !description ? "" : description,
        size: !size ? [] : size,
        discount: !discount ? 0 : discount
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
        const exist: string[] = form.size.filter((size: string) => size === e.target.value)
        if (exist.length > 0) {
            Swal.fire({
                icon: 'error',
                text: 'Ya agregaste este tamaño'
            })
            return
        }
        setForm({
            ...form,
            size: [...form.size].concat(e.target.value)
        })
    }

    const removeSize = (sizeToRemove: string): void => {
        setForm({
            ...form,
            size: form.size.filter((size: string) => size !== sizeToRemove)
        })
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        if (formValidate(form)) {
            dispatch(postClothes(form))
            Swal.fire({
                icon: 'success',
                title: 'Se ha creado la prenda'
            })
        } else {
            Swal.fire({
                title: '¡Algo anda mal!',
                icon: 'error',
                text: 'Verifica que ningun numero sea negativo o que algun campo se encuentre vacio'
            })
        }
    }

    const addUrlImage = () => {
        const image = (document.getElementsByName('image')[0] as HTMLInputElement).value
        setForm({
            ...form,
            image: [...form.image].concat(image)
        })
    }

    return (
        <ContainerCRUD>
            <h2>{
                id !== undefined
                    ? 'Actualiza tu prenda'
                    : 'Crea una prenda'
            }</h2>

            <FormStyled>
                <div className="form-group">
                    <label>Titulo</label>
                    <input type='text' name="title" className="form-control" placeholder="Titulo" value={form.title} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>URL Imagen</label>
                    <input type="url" name="image" className="form-control" placeholder="Imagen" />
                    <button type='button' onClick={() => addUrlImage()}>Agregar</button>
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input type="number" name="price" className="form-control" placeholder="Precio" value={form.price === 0 ? "" : form.price} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" className="form-control" placeholder="Stock" value={form.stock === 0 ? "" : form.stock} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Descuento</label>
                    <input type="number" name="discount" className="form-control" placeholder="Descuento en %" value={form.discount === 0 ? "" : form.discount} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Categoria</label>
                    <input type="text" name="categorie" className="form-control" placeholder="Categoria" value={form.categorie} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Descripción</label>
                    <input type="text-area" name="description" className="form-control" placeholder="Descripción" value={form.description} onChange={handleChange} />
                </div>

                <div className="form-group md-row">
                    <label>Tamaños disponibles</label>
                    <select className="form-control" onChange={handleSelect}>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit" onClick={handleSubmit}>
                        {
                            id !== undefined
                                ? '¡Actualizar!'
                                : '¡Crear!'
                        }
                    </button>
                </div>
            </FormStyled>

            <div className="list">
                <ul>
                    {
                        form.size.length > 0
                            ? 'Seleccionaste estos tamaños'
                            : 'Aun no seleccionaste ningun tamaño'
                    }
                    {
                        form.size &&
                        form.size.map((size: string, i: number) => {
                            return <li key={i} className="list-group-item">
                                {size}
                                <button onClick={() => removeSize(size)}>X</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </ContainerCRUD>
    )
}
