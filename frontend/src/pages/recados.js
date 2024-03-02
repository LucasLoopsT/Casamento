import React, { useState } from "react";
import api from "../api.js";

const Recados2 = () => {
  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeForm, setActiveForm] = useState("formText");

  const alertFields = () => {
    const modal = document.querySelector("#alertFields");
    modal.style.animation = "";
    modal.style.animation = "alert 1s forwards";
    modal.classList.toggle("hide");

    setTimeout(() => {
      modal.style.animation = "";
      modal.style.animation = "alert 1s forwards reverse";
      setTimeout(() => {
        modal.classList.toggle("hide");
      }, 1000);
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nameValue || !email || !password) {
      alertFields();
      return;
    }

    const payload = {
      name: nameValue,
      email,
      password,
    };

    console.log(payload);
    alert("cadastrado front");

    try {
      await api.post("/user", payload);
      alert("Cadastrado com sucesso!");


      // Mudar para a próxima etapa
      setActiveForm("formLogin");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente mais tarde.");
    }
  };

  const openModal = (id) => {
    const modal = document.querySelector(id)
    modal.style.animation = "";
    modal.style.animation = "modal 1s forwards";
  };

  const closeModal = (id) => {
    const modal = document.querySelector(id)
    modal.style.animation = "";
    modal.style.animation = "modal 1s forwards reverse";
  };

  const handleSendText = (event) => {
    event.preventDefault();

    if (!messageValue) {
      alertFields();
      return;
    }

    // Enviar para a próxima etapa
    setActiveForm("formLogin");
    setTimeout(()=>{
      openModal("#formLogin");
    },1);
  };

  const handleTestEmail = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alertFields();
      return;
    }

    // Testar o e-mail (fazer a chamada da API ou outra lógica)
    alert(`Verificar se o e-mail está cadastrado... ${email}`);
  };

  const handleSendEmail = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alertFields();
      return;
    }

    // Enviar e-mail (fazer a chamada da API ou outra lógica)
    alert("Chamada da API para criar usuário...");
  };

  const handleBackComment = () => {
    setActiveForm("formText");
    setTimeout(() => {
      openModal("#formText");
    },0);
  };

  const handleGoRegister = () => {
    setActiveForm("formRegister");
    setTimeout(()=>{
      openModal("#formRegister");
    },0);
  };

  const handleGoLogin = () => {
    setActiveForm("formLogin");
    setTimeout(() => {
      openModal("#formLogin");
    },0);
  };

  return (
    <>
      <span id="alertFields" class="hide">Preencha os campos!</span>
      <section id="recados" className="section">
        <h2>Deixe seu depoimento!</h2>
        <div id="form_container" className="section_abt">
          {activeForm === "formText" && (
            <form id="formText">
              <legend>Seu comentário</legend>
              <div>
                <label htmlFor="message">Depoimento</label>
                <textarea
                  id="message"
                  placeholder="Escreva aqui."
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                ></textarea>
              </div>
              <button className="btn" onClick={handleSendText}>
                Enviar
              </button>
            </form>
          )}
          {activeForm === "formLogin" && (
            <form id="formLogin">
              <span className="backComments" onClick={handleBackComment}>✖︎</span>
              <legend>Login</legend>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="number"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn" onClick={handleTestEmail}>
                Enviar
              </button>
              <span
                id="goRegister"
                className="modalLink"
                onClick={handleGoRegister}
              >
                Não tem conta?
              </span>
            </form>
          )}

          {activeForm === "formRegister" && (
            <form id="formRegister">
              <span className="backComments" onClick={handleBackComment}>✖︎</span>
              <legend>Registrar</legend>
              <div>
                <label for="name">Nome</label>
                <input id="name" type="text" />
              </div>
              <div>
                <label for="email">E-mail</label>
                <input id="email" type="email" />
              </div>
              <div>
                <label for="password">Senha</label>
                <input id="password" type="password"/>
              </div>
              <button className="btn" onClick={handleTestEmail}>Enviar</button>
              <span id="goLogin" className="modalLink" onClick={handleGoLogin}>Tenho Login</span>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Recados2;
