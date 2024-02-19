import React, { useEffect } from 'react';

const contagemRegressiva = (dataAlvo) => {
    let intervalID;

    const atualizarContagem = (dias, horas, minutos, segundos) => {
        document.getElementById('days').innerHTML = dias;
        document.getElementById('hours').innerHTML = horas;
        document.getElementById('minutes').innerHTML = minutos;
        document.getElementById('seconds').innerHTML = segundos;
    }

    const calcularDiferenca = () => {
        const agora = new Date().getTime();
        const diferencaEmMilissegundos = dataAlvoEmMilissegundos - agora;

        const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

        atualizarContagem(dias, horas, minutos, segundos);

        if (diferencaEmMilissegundos <= 0) {
            clearInterval(intervalID);
            atualizarContagem(0, 0, 0, 0);
        }
    }

    const dataAlvoEmMilissegundos = dataAlvo.getTime();
    calcularDiferenca();
    intervalID = setInterval(calcularDiferenca, 1000);
}

const Count = () => {
    useEffect(() => {
        const dataAlvo = new Date('2024-07-19T23:59:59');
        contagemRegressiva(dataAlvo);
    }, []);

    return (

        <section id="contagem">
            <h2>Contagem Regressiva</h2>
            <div id="timer">
                <div id="numbers_timer">
                    <h2 id="days">00</h2>
                    <h2 id="hours">00</h2>
                    <h2 id="minutes">00</h2>
                    <h2 id="seconds">00</h2>
                </div>
                <div id="legend_timer">
                    <p>Dias</p>
                    <p>Horas</p>
                    <p>Minutos</p>
                    <p>Segundos</p>
                </div>
            </div>
            <img id="icon_clock" src="https://images.vexels.com/media/users/3/206789/isolated/preview/ffc79c0aca3b645795cce01db7af4e23-cronometro-de-tacada-de-basquete.png" />
        </section>

    );
}

export default Count