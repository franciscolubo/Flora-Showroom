import React, { useState } from "react";
import Swal from "sweetalert2";
import formValidate from "../helpers/formValidate";
import { useAppDispatch } from "../hooks/redux";
import { postClothes } from "../redux/slices/clotheSlice";
import { ContainerCRUD, FormStyled } from "../styles/ClotheCreate.styles";
import { CLOTHES } from "../types";

export default function ClotheCreate() {
    const dispatch = useAppDispatch()
    const [form, setForm] = useState<CLOTHES>({
        title: "",
        image: "",
        price: 0,
        stock: 0,
        categorie: "",
        description: "",
        size: [],
        discount: 0
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

    return (
        <ContainerCRUD>
            <h2>Crea una prenda</h2>

            <FormStyled onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input type='text' name="title" className="form-control" placeholder="Titulo" value={form.title} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>URL Imagen</label>
                    <input type="url" name="image" className="form-control" placeholder="Imagen" value={form.image} onChange={handleChange} />
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
                    <button>
                        ¡Crear!
                    </button>
                </div>
            </FormStyled>

            <div className="list">
                <ul>Seleccionaste estos tamaños
                    {
                        form.size &&
                        form.size.map((size: string, i: number) => {
                            return <li key={i}>
                                {size}
                            </li>
                        })
                    }
                </ul>
            </div>
        </ContainerCRUD>
    )
}
