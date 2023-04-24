import React from "react";
import Budget from "./Budget";
import style from "./contact.module.css";
import Link from "next/link";
import { CiMail, CiFacebook, CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={style.container}>
      <Budget />
      <div className={style.contact}>
        <Link
          className={style.social}
          href="https://www.instagram.com/solerubio/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <CiInstagram className={style.logo} />
          <span>/solerubio</span>
        </Link>
        <Link className={style.social} href="" target="_blank">
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
