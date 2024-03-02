import React, {useEffect} from "react";

const BoughtList = () => {
    return(
        <section id="giftsBought" className="section">
            <h2>Presentes Comprados</h2>
            <div className="section_abt">
            <p>Agradecemos a todos que já contribuíram para tornar o nosso casamento ainda mais especial. Abaixo, você pode
                conferir a lista dos presentes que foram carinhosamente escolhidos por vocês. Agradecemos por fazerem parte
                desse momento único e por compartilharem a felicidade conosco!"</p>
            </div>
            <hr/>
            <div className="carousel">
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            <div className="product item">
                <img className="preview"
                src="https://meandhome.fbitsstatic.net/img/p/mesa-redonda-270-em-madeira-macica-78242/273648-3.jpg?w=680&h=453&v=no-change&qs=ignore"/>
                <h3 className="name">Mesa</h3>
                <h3 className="price">1.200 $</h3>
            </div>
            </div>
            <hr/>
        </section>
    );
};

export default BoughtList;