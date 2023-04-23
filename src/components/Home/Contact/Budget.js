import React, { useState } from "react";
import style from "./budget.module.css";
//nombre , email, consulta
//maximo de caracteres para la consulta?

const Budget = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);

  const handleSubmit = (e) => {
    e.preventDefault();

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
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <div>
      <form className={style.container}>
        <div className={style.fields}>
          <input
            className={style.input}
            type="text"
            name="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className={style.label} for="name">
            nombre
          </label>
        </div>
        <div className={style.fields}>
          <input
            className={style.input}
            type="email"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className={style.label} for="email">
            email
          </label>
        </div>
        <div className={style.fields}>
          <div>
            <input
              className={style.input}
              type="text"
              name="message"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              className={style.button}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              ENVIAR
            </button>
          </div>
          <label className={style.label} for="message">
            mensaje
          </label>
        </div>
      </form>
    </div>
  );
};

export default Budget;
