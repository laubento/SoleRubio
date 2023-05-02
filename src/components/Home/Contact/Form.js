import React, { useState } from "react";
import style from "./form.module.css";
//nombre , email, consulta
//maximo de caracteres para la consulta?

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /*const [stateButton, setStateButton] = useState("true");*/

  let stateButton = true;

  console.log(name, email, message);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let checkEmail = emailRegex.test(email);

  if (name !== "" && message !== "" && checkEmail) stateButton = false;

  const handleSubmit = (e) => {
    e.preventDefault();

    /*if (name === "") return alert("Ingresa tu nombre");
    if (email === "") return alert("Ingresa tu mail");
    else if (!emailRegex.test(email)) return alert("Mail inválido");
    if (message === "") return alert("Ingresa tu mensaje");
    else setStateButton(false);*/

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Tu mensaje fue enviado con éxito");

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form className={style.container}>
      <div className={style.fields}>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className={style.label} htmlFor="name">
          nombre
        </label>
      </div>
      <div className={style.fields}>
        <input
          className={style.input}
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className={style.label} htmlFor="email">
          email
        </label>
      </div>
      <div className={style.fields}>
        <div className={style.message}>
          <textarea
            className={style.inputMessage}
            type="text"
            name="message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            disabled={stateButton}
            className={style.button}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            ENVIAR
          </button>
        </div>
        <label className={style.label} htmlFor="message">
          mensaje
        </label>
      </div>
    </form>
  );
};

export default Form;
