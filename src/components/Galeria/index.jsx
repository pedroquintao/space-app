import styled from "styled-components";
import Populares from "../Populares";
import Titulo from "../Titulo";
import Tags from "./Tags";

const ContainerGaleria = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return(
        <>
            <Tags />
            <ContainerGaleria>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>
                <Populares />
            </ContainerGaleria>
        </>
    )
}

export default Galeria;