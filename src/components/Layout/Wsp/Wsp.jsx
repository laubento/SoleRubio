// import React from 'react'
import Link from "next/link";
import wtsp from "../../../../public/icons8-whatsapp.svg";
import Image from "next/image";

const Wsp = () => {
  return (
    <div>
      <Link href="https://wa.me/5491132911607">
        <Image
        src={wtsp}
         />
      </Link>
    </div>
  );
};

export default Wsp;
