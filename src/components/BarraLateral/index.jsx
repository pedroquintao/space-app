import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    /* background-color: red; */
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="/icones/home.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo
                    >
                        <a href="">
                            Início
                        </a>
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        <a href="">
                            Mais vistas
                        </a>
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral