import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto


// import styled from "styled-components"

// const CampoTextoEstilizado = styled.div`
//     display: flex;
//     padding: 16px 12px;
//     border: 2px solid #C98CF1;
//     border-radius: 10px;
//     min-width: 570px;
//     height: 32px;

//     input {
//         flex-grow: 1;
//         border-style: none;
//         background-color: transparent;
//         color: #D9D9D9;
//         font-family: Gandhi Sans;
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 20px; /* 100% */ 
//     }

//     img {
//         width: 32px;
//         height: 32px;
//     }
// `

// const CampoTexto = () => {
//     return (
//         <CampoTextoEstilizado>
//              <input type="text" placeholder="O que você procura?"/>
//              <img src="/imagens/search.png"/>
//         </CampoTextoEstilizado>
//     )
// }

// export default CampoTexto;