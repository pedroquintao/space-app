const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false}) => {
    return (
        <>
            <img src={ ativo ? iconeAtivo : iconeInativo }/>
            { children }
        </>
    )
}

export default ItemNavegacao;