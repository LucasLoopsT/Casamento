import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

import api from "../api.js";

const Recados = () => {

  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [confirmCodeInput, setConfirmCodeInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [activeForm, setActiveForm] = useState("formText");

  const alertModal = (msg) => {
    const modal = document.querySelector("#alertModal");
    modal.textContent = msg;
    modal.style.animation = "alertOpen 1s forwards";
    setTimeout(closeAlert, 4000);
  };

  const closeAlert = () => {
    const modal = document.querySelector("#alertModal");
    modal.style.animation = "alertClose 1s forwards";
  }

  // Create Comment

  const createComment = async (userID, userName) => {
    const dataInst = new Date();
    const dataAtual = dataInst.toLocaleDateString();

    const payload = {
      userID: userID,
      userName: userName,
      text: messageValue,
      day: dataAtual,
    };
    try {
      await api.post("/comment", payload);
      pullComments();
      alertModal("Comentário postado!");
    } catch (error) {
      alertModal("Comentário não criado!")
    }
  }

  const pullComments = async () => {
    try {
      const comentarios = await api.get("/comment");
      const commentsSection = document.querySelector("#comments");

      // Limpar todos os comentários existentes
      while (commentsSection.firstChild) {
        commentsSection.removeChild(commentsSection.firstChild);
      }

      // Adicionando cada comentário do banco
      comentarios.data.forEach((comentario) => {
        const newComment = document.createElement("div");
        newComment.classList.add("person");
        newComment.innerHTML = `
              <h3>${comentario.userName}</h3>
              <p>${comentario.text}</p>
              <span>${comentario.day}</span>
            `;
        commentsSection.appendChild(newComment);
      });
    } catch (error) {
      console.log("Erro ao buscar comentários no banco.");
    }
  };

  // Buttons and Actions

  const handleSendText = (event) => {
    event.preventDefault();

    if (!messageValue) {
      alertModal("Escreva seu depoimento!");
      return;
    }

    // Enviar para a próxima etapa
    setActiveForm("formLogin");
    setTimeout(() => {
      openModal("#formLogin");
    }, 1);
  };

  const handleTestEmail = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alertModal("Preencha os campos!");
      return;
    }

    try {
      // Ver se o Email e Senha conferem no banco e chamar o createComment(). 
      const response = await api.post("/auth", { email, password });
      const userID = response.data._id;
      const userName = response.data.name;

      createComment(userID, userName);

      setEmail("");
      setPassword("");
      setMessageValue("");
      handleBackComment();

    } catch (error) {
      alertModal("Usuário ou Senha não consta");
      console.error("Ocorreu algum erro:", error);
    }
  };

  const generateCode = () => {
    const min = 100000; // Valor mínimo de um número de 6 dígitos
    const max = 999999; // Valor máximo de um número de 6 dígitos

    // Gera um número aleatório entre min e max
    const confirmationCode = Math.floor(min + Math.random() * (max - min + 1));

    return confirmationCode.toString();
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();

    if (!nameValue || !newEmail || !newPassword) {
      alertModal("Preencha os campos!");
      return;
    }

    // Validar email
    const emailRegex = /\S+@gmail\.com/;
    if (!emailRegex.test(newEmail)) {
      alertModal("Email inválido!");
      return;
    }

    // Validar a senha (mínimo 8 caracteres)
    if (newPassword.length < 8) {
      alertModal("Senha inválida!");
      return;
    }

    try {
      // Verificando se email já existe no BD
      const emailExists = await api.post(`/user/email`, { newEmail });

      if (emailExists.data.message === "Usuário NÃO existe!") {
        const confirmationCode = generateCode();
        setConfirmCode(confirmationCode);

        const templateParams = {
          to_email: newEmail,
          to_name: nameValue,
          confirm_code: confirmationCode
        }

        emailjs.send('service_4xl937b', 'template_sv24irr', templateParams, 'ROSWFuX8LYfl3n3TR')
          .then(
            () => {
              alertModal(`Código enviado para ${newEmail}.`);
            },
            (error) => {
              console.log(`Algum erro: ${error}.`);
            },
        );

        setActiveForm("formConfirm");
        setTimeout(() => {
          openModal("#formConfirm");
        }, 0);

      } else {
        alertModal("Email já cadastrado!");
      }
    } catch (error) {
      console.log("Erro ao enviar e-mail:", error);
      alertModal("Algum erro");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: nameValue,
      email: newEmail,
      password: newPassword
    }
    try {
      if(confirmCode === confirmCodeInput){

        const response = await api.post("/user", payload);
        alertModal("Cadastrado com sucesso!");
        
        const userID = response.data.user.id;
        const userName = response.data.user.name;

        createComment(userID, userName);
        setActiveForm("formLogin");
      } else {
        alertModal("Código inválido!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alertModal("Erro ao cadastrar. Tente novamente mais tarde.");
    }
  };

  // Mudando os Modais
  const openModal = (id) => {
    const modal = document.querySelector(id)
    modal.style.animation = "";
    modal.style.animation = "modal 1s forwards";
  };

  const handleGoRegister = () => {
    setActiveForm("formRegister");
    setTimeout(() => {
      openModal("#formRegister");
    }, 0);
  };

  const handleGoLogin = () => {
    setActiveForm("formLogin");
    setTimeout(() => {
      openModal("#formLogin");
    }, 0);
  };

  const handleBackComment = () => {
    setActiveForm("formText");
    setTimeout(() => {
      openModal("#formText");
    }, 0);
  };

  const handleBackRegister = () => {
    setActiveForm("formRegister");
    setTimeout(() => {
      openModal("#formRegister");
    }, 0);
  };

  useEffect(() => {
    pullComments();
  }, []);

  return (
    <>
      <span id="alertModal"></span>
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
                  maxLength={250}
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
                  type="email"
                  value={email}
                  placeholder="exemplo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Sua senha"
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
                <input
                  id="name"
                  type="text"
                  value={nameValue}
                  placeholder="Seu nome"
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>
              <div>
                <label for="newEmail">E-mail</label>
                <input
                  id="newEmail"
                  type="email"
                  value={newEmail}
                  placeholder="Seu Gmail"
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="newPassword">Senha</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  placeholder="Mínimo 8 caracteres"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button className="btn" onClick={handleSendEmail}>Enviar</button>
              <span id="goLogin" className="modalLink" onClick={handleGoLogin}>Tenho Login</span>
            </form>
          )}
          {activeForm === "formConfirm" && (
            <form className="" id="formConfirm">
              <span className="backComments" onClick={handleBackRegister}>✖︎</span>
              <legend htmlFor="confirmCode">Código de verificação:</legend>
              <input
                  id="confirmCode"
                  type="number"
                  value={confirmCodeInput}
                  placeholder="123456"
                  onChange={(e) => setConfirmCodeInput(e.target.value)}
                />
              <button className="btn" onClick={handleSubmit}>Verificar</button>
            </form>
          )}
        </div>
        <div id="comments"></div>
      </section>
    </>
  );
};

export default Recados;
