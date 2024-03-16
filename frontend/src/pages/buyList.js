import React, {useEffect} from "react";

const BuyList = () => {
    return(
        <section id="giftsToBuy" className="section">
            <h2>Lista de Presentes</h2>
            <div className="section_abt">
            <p>Para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. Mas, se vocês
                também quiserem nos presentear, ficaremos muito agradecidos. Fizemos essa lista virtual de sugestões para 
                ajudar em casos de dúvidas em o que nos dar!</p>
            </div>
            <hr/>
            <div id="toBuyList" className="productList">
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            <div className="product">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
                <button className="btn">Presentear!</button>
            </div>
            </div>
            <hr/>
            <button className="btn">Ver mais</button>
        </section>
    );
};

export default BuyList;