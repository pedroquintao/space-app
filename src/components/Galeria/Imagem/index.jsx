import { styled } from 'styled-components'
import  botaoFavoritoInativo  from '../../../../public/icones/favorito.png'

const ImagemEstilizada = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 448px;
    height: 256px;
    border-radius: 20px;
    background-color: white;
    margin: 0;

    
    li {
        list-style: none;
    }

    img {
        flex-grow: 1;
        background-repeat: no-repeat;
        background-size: cover;

    }

    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 16px;
        margin: 0;
        max-height: 80px;
        background-color: red;
        border-radius: 0 0 20px 20px;
 
        h3 {
            margin: 0;
        }

        footer{
            display: flex;
            justify-content: space-between;
            margin: 0;

            p {
                margin: 0;
                flex-grow: 1;
            }

            button {
                height: 20px;
                align-self: flex-end;
            }
        }
    }
`

const Imagem = ({path, titulo, fonte}) => {
    return (
        <ImagemEstilizada>
            <li>
                <img src={path}/>
                <figcaption>
                    <h3>{titulo}</h3>
                    <footer>
                        <p>{fonte}</p>
                        <button></button>
                        <button></button>
                    </footer>
                </figcaption>
            </li>
        </ImagemEstilizada>
    )
}

export default Imagem;