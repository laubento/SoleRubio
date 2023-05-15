import React from "react";
import Form from "./Form";
import style from "./contact.module.css";
import Link from "next/link";
import { CiMail, CiFacebook, CiInstagram } from "react-icons/ci";
import wtsp from "../../../../public/icons8-whatsapp.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={style.container} id="contact">
      <Form />
      <div className={style.contact}>
        <Link
          className={style.social}
          href="https://www.instagram.com/solerubio/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <CiInstagram className={style.logo} />
          <span>/solerubio</span>
        </Link>
        <Link
          className={style.social}
          href="https://wa.me/5491140617484"
          target="_blank"
        >
          <Image src={wtsp} className={style.logo} />
          <span>+ 54 91140617484</span>
        </Link>
        <Link
          className={style.social}
          href="mailto:msolerubio@gmail.com"
          target="_blank"
        >
          <CiMail className={style.logo} />
          <span>msolerubio@gmail.com</span>
        </Link>
        <Link
          className={style.social}
          href="https://www.facebook.com/profile.php?id=100070032920024&mibextid=LQQJ4d"
          target="_blank"
        >
          <CiFacebook className={style.logo} />
          <span>facebook/solerubio</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
