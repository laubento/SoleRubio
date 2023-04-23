import React from "react";
import Budget from "./Budget";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <Budget />
      <div className={style.contact}>
        <p>/solerubio</p>
        <p>solerubio@mimail.com</p>
        <p>facebook/solerubio</p>
      </div>
    </div>
  );
};

export default Contact;
