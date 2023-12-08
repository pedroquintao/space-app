import styled from "styled-components";
import Populares from "../Populares";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";

const ContainerGaleria = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaEstilizada = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0;
    padding: 0;
    max-width: 920px
`

const Galeria = ({ fotos = []}) => {
    return (
        <>
            <Tags />
            <ContainerGaleria>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaEstilizada>
                        {fotos.map(foto => <Imagem 
                                                    path={foto.path}
                                                    titulo={foto.titulo}
                                                    fonte={foto.fonte}
                                                    />)}
                    </ListaEstilizada>
                </SecaoFluida>
                <Populares />
            </ContainerGaleria>
        </>
    )
}

export default Galeria;