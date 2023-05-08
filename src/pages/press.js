import PressComp from "../components/Press/PressComp";
import style from "../styles/press.module.css";
import dotenv from "dotenv";

export default function Press({ data }) {
  console.log(data);

  return (
    <div className={style.containerPress}>
      <PressComp data={data} />
    </div>
  );
}

export async function getStaticProps() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET;
  let info = {};
  let urls = [];

  await fetch(
    `https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Prensa/&max_results=500`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${key}:${secret}`),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      info = data.resources;
      urls = info.map((e) => {
        return e["url"];
      });
      return urls;
    })
    .catch((error) => console.error(error));

  return {
    props: {
      data: urls,
    },
  };
}
