import React, { useState } from 'react';


function Modalprodutos() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [previewHTML, setPreviewHTML] = useState('');

    const handlePrecoChange = (event) => {
        let value = event.target.value.replace(/\D/g, '');
        value = 'R$ ' + formatNumber(value);
        setPreco(value);
    };

    const formatNumber = (value) => {
        return (parseFloat(value) / 100).toFixed(2).replace('.', ',');
    };

    const previewProduto = () => {
        setPreviewHTML(
            <div className="md-product">
                <img className="md-preview" src={imagem} alt={nome} />
                <h3 className="name">{nome}</h3>
                <h3 className="price">{preco}</h3>
                <button className="button">Presentear!</button>
            </div>
        );
    };

    const adicionarProduto = () => {
        alert(
            'Produto adicionado:\nNome: ' + nome + '\nPreço: ' + preco + '\nImagem: ' + imagem
        );
        limparCampos();
    };

    const limparCampos = () => {
        setNome('');
        setPreco('');
        setImagem('');
        setPreviewHTML('');
    };

    return (
        <div className="container">
            <div className="md-preview-container">
                <h3>Preview do Produto</h3>
                <div className="md-preview" id="md-roduto-preview">
                    {previewHTML}
                </div>
            </div>

            <div>
                <h2>Adicionar Produto</h2>
                <div className="input-group">
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <label htmlFor="nome">Nome do Produto</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        id="preco"
                        name="preco"
                        value={preco}
                        onChange={handlePrecoChange}
                        required
                    />
                    <label htmlFor="preco">Preço</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        id="imagem"
                        name="imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        required
                    />
                    <label htmlFor="imagem">URL da Imagem</label>
                </div>
            </div>
            <div className="container-btn">
                <button onClick={previewProduto}>Visualizar Preview</button>
                <button onClick={adicionarProduto}>Criar Produto</button>
            </div>
        </div>
    );
}

export default Modalprodutos;
