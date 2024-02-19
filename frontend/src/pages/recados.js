import React, { useEffect } from "react";

const Recados = () => {
    return (
        <section id="recados" class="section">
            <h2>Deixe seu depoimento!</h2>
            <div id="form_container" class="section_abt">
                <form>
                    <div>
                        <label for="name">Nome</label>
                        <input id="name" type="text" />
                    </div>
                    <div>
                        <label for="message">Depoimento</label>
                        <textarea id="message"></textarea>
                    </div>
                    <button class="btn">Enviar</button>
                </form>
            </div>
            <div id="comments">
                <div class="person">
                    <h3>Dudz Cardoso</h3>
                    <p>Vai ganhar uma airfry da madrinhaaaa</p>
                    <span>05/02/2024</span>
                </div>
                <div class="person">
                    <h3>Lucas Lopes</h3>
                    <p>Feliz pelo casal! S2</p>
                    <span>06/02/2024</span>
                </div>
            </div>
        </section>
    );
};

export default Recados;