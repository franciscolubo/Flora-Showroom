import { FunctionComponent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CLOTHES } from "../types";

const Form: FunctionComponent = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    let obj: CLOTHES = {
        title: "",
        image: "",
        price: 0,
        stock: 0,
        categorie: "",
        description: ""
    }
    const [form, setForm] = useState<CLOTHES>(obj)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h2>Form</h2>

            <form>
                <span>Titulo</span>
                <input type='text' name="title" placeholder="Titulo"/>
                
                <span>URL Imagen</span>
                <input type="url" name="image" placeholder="Imagen"/>
                
                <span>Precio</span>
                <input type="number" name="price" placeholder="Precio"/>
                
                <span>Stock</span>
                <input type="text" name="stock" placeholder="Stock"/>
                
                <span>Categoria</span>
                <input type="text" name="categorie" placeholder="Categoria"/>
                
                <span>Descripción</span>
                <input type="text-area" name="description" placeholder="Descripción"/>
            </form>
        </div>
    )
}

export default Form