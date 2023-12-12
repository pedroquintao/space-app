import { styled } from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const ColunaDeFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`
const Populares = () => {
    return <div style={{ minWidth: 212 }}>
        <Titulo $alinhamento="center">Populares</Titulo>
        <ColunaDeFotos>
            {fotos.map(foto => <Imagem key={foto.id}
                                    src={foto.path}
                                    alt={foto.alt} 
                                    />)}
        </ColunaDeFotos>
    </div>
}

export default Populares