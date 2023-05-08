import style from "./Slider.module.css";
import Image from "next/image";
import slides from "../../../images/slides.jpg";
import slides2 from "../../../images/slides2.jpg";

export function Slider({ data }) {

  
  return (
    <div className={style["container-main"]}>
      <div className={style["container-backgroud"]}>
        <Image
          src={data[0]}
          id={style["IMG"]}
          alt="slides"
          className={style["image-backgroud-one"]}
          width={1000}
          height={1000}
        />
        <Image
          src={data[1]}
          id={style["IMG"]}
          alt="slides"
          className={style["image-backgroud-two"]}
          width={1000}
          height={1000}
        />
        <Image
          src={data[2]}
          id={style["IMG"]}
          alt="slides"
          className={style["image-backgroud-three"]}
          width={1000}
          height={1000}
        />
        <Image
          src={data[3]}
          id={style["IMG"]}
          alt="slides"
          className={style["image-backgroud-four"]}
          width={1000}
          height={1000}
        />
        <Image
          src={data[4]}
          id={style["IMG"]}
          alt="slides"
          className={style["image-backgroud-five"]}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
