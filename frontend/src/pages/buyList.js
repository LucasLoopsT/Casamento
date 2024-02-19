import React, {useEffect} from "react";

const BuyList = () => {
    return(
        <section id="giftsToBuy" class="section">
            <h2>Lista de Presentes</h2>
            <div class="section_abt">
            <p>Para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. Mas, se vocês
                também quiserem nos presentear, ficaremos muito agradecidos. Fizemos essa lista virtual, mas caso queiram
                comprar itens físicos criamos listas na Havan e na Ponto Frio, se por acaso não tiver um item que gostaria de
                presentar fale com um de nós dois que podemos combinar da melhor forma possivel!</p>
            </div>
            <hr/>
            <div id="toBuyList" class="productList">
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            <div class="product">
                <img class="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 class="name">Mesa</h3>
                <h3 class="price">1.200 $</h3>
                <button class="btn">Presentear!</button>
            </div>
            </div>
            <hr/>
            <button class="btn">Ver mais</button>
        </section>
    );
};

export default BuyList;