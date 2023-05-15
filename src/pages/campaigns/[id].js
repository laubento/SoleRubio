/* eslint-disable @next/next/no-sync-scripts */

import dotenv from "dotenv";
import Image from "next/image";
import style from "../../styles/campaigns.module.css";
import { NameCampaigns } from "@/components/Campaigns/NameCampaigns/NameCampaigns";
import Link from "next/link";
export default function Campaign({ data, name }) {
  // let util = [
  //   { name },
  //   { name: "MICHAEL JORDAN" },
  //   { name: "MICAEL PEPOLIN" },
  //   { name: "RAMIRES JORDAN C3" },
  //   { name: "MLOPILO" },
  //   { name: "SSL" },
  //   { name: "MICHAEL JORDAN GH" },
  //   { name: "GRAN JULIAN JORDAN" },
  //   { name: "JUJIL JORDAN" },
  //   { name: "MICHAELO" },
  //   { name: "MICHAEL D4" },
  //   { name: "HILO HILO" },
  //   { name: "MICHAEL JORDAN" },
  //   { name: "MICHAEL JORDAN" },
  //   { name: "MICHAEL JORDAN" },
  // ];

    let util = [{ name }, { name: 'MICHAEL JORDAN' }, { name: 'MICAEL PEPOLIN' }, { name: 'RAMIRES JORDAN C3' }, { name: 'MLOPILO' }, { name: 'SSL' }, { name: 'MICHAEL JORDAN GH' }, { name: 'GRAN JULIAN JORDAN' }, { name: 'JUJIL JORDAN' }, { name: 'MICHAELO' }, { name: 'MICHAEL D4' }, { name: 'HILO HILO' }, { name: 'MICHAEL JORDAN' }, { name: 'MICHAEL JORDAN' }, { name: 'MICHAEL JORDAN' }]


    return (

        <div className={style["id-container-main"]}>
            <div className={style["container-campaigns"]}>
                <NameCampaigns data={util} />
                <div className={style["id-container-images"]}>
                    <h4>{name}</h4>
                    <h1><Link href={'/campaigns'}>{'↩'}</Link></h1>
                    <div className={style["id-container-img"]}>
                        {data.map((el,i) => {
                            return(
                                <Image className={style.img} key={i} src={el} alt={name}  width={450} height={450}/>
                            )
                        })}
                    </div>
                    <h5><Link href={'/campaigns'}>Volver a campañas</Link></h5>
                </div>
           </div>
        </div>
  );
}

export async function getStaticPaths() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET;
  let info = "";

  await fetch(
    `https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Sole Rubio/&max_results=500`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${key}:${secret}`),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return (info = data);
    })
    .catch((error) => console.error("aaaa" + error));

  const found = info.resources.map((el) => el.folder);
  const newfound = found.filter((value, index) => {
    return found.indexOf(value) === index;
  });

  const newName = newfound.map((el) => {
    let split = el.split("/");
    let separate = split[1].split(" ");
    let complete = separate.join("_");
    return complete;
  });

  const paths = newName.map((el) => ({
    params: { id: el },
  }));
  // const paths = [{
  //     params: {id: 'el'}
  // }]
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET;

  let dataComplete = "";

  let nameFound = params.id.split("_");
  let info = "Sole Rubio/" + nameFound.join(" ");

  await fetch(
    `https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${key}:${secret}`),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let dataActualice = data.resources.map((el) => {
        return el.folder === info && el.url;
      });
      dataActualice = dataActualice.filter((el) => el !== false);
      return (dataComplete = dataActualice);
    })
    .catch((error) => console.error(error));

  return {
    props: {
      data: dataComplete,
      name: nameFound.join(" "),
    },
  };
}
