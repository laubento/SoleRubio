import { NameCampaigns } from "@/components/Campaigns/NameCampaigns/NameCampaigns";
import { ImageCampaigns } from "@/components/Campaigns/ImageCampaigns/ImageCampaings";
import style from "../../styles/campaigns.module.css";
import Pagination from "../../components/Campaigns/Pagination/Pagination";
import { useState } from "react";
import dotenv from "dotenv";
import { useRouter } from "next/router";

export default function Campaigns({ data }) {
  const router = useRouter();
  let pepe = data.concat(data).concat(data).concat(data);

  const [page, setPage] = useState(1);
  const [campaignsPerPage, setCampaignsPerPage] = useState(15);
  const indexLastCampaign = page * campaignsPerPage;
  const indexFirstCampaign = indexLastCampaign - campaignsPerPage;
  const currentCampaigns = pepe.slice(indexFirstCampaign, indexLastCampaign);

  const paging = (number) => {
    setPage(number);
  };

  return (
    <div className={style["container-main"]}>
      <div className={style["container-campaigns"]}>
        <NameCampaigns data={currentCampaigns} className={style["desactive"]} />
        <ImageCampaigns data={currentCampaigns} />
        <Pagination page={page} paging={paging} campaigns ={pepe.length} campaignsPerPage = {campaignsPerPage} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET;
  let info = "";

    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Sole%20Rubio/&max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => {
            let newInfo = []
            let names = {}
            data.resources.forEach(item => {
                if(!names[item.folder]){
                    let name = item.folder.split('/') 
                    newInfo.push({name: name[1], url: item.url})
                    names[item.folder] = true
                }
            })
            return info = newInfo
        })
        .catch(error => console.error(error))

    return {
        props: {
            data: info
        }
    }
}
