import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchCategorieClothes } from "../redux/slices/clotheSlice"
import { Nav } from "../styles/Navbar.styles"

export default function Navbar() {
    const dispatch = useAppDispatch()
    const categories: string[] = useAppSelector((state) => state.clothes.categories)

    useEffect(() => {
        dispatch(fetchCategorieClothes())
    }, [])

    console.log(categories)
    return (
        <div>

            <Nav>
                <li className="options">
                    <button>MENU</button>
                    <button className="categories">CATEGORIAS</button>
                    <div>
                        {
                            categories.map((cat: string, i: number) =>
                                <button key={i}>{cat}</button>
                            )
                        }
                    </div>
                </li>
                <li className="search">
                    <input type="search" />
                    <button></button>
                </li>

            </Nav>
        </div>
    )
}