import { NameCampaigns } from "@/components/Campaigns/NameCampaigns/NameCampaigns";
import { ImageCampaigns } from "@/components/Campaigns/ImageCampaigns/ImageCampaings";
import style from "../../styles/campaigns.module.css";
import Pagination from "../../components/Campaigns/Pagination/Pagination";
import { useState } from "react";
import dotenv from "dotenv";

export default function Campaigns({ data }) {
  let pepe = data

  const [page, setPage] = useState(1);

  const [campaignsPerPage, setCampaignsPerPage] = useState(12);
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
      </div>
      <div className={style["container-campaigns"]}>
        <div>
          {/* Tiene que estar vacio */}
        </div>
        <div className={style["container-page"]}>
          <Pagination page={page} paging={paging} campaigns ={pepe.length} campaignsPerPage = {campaignsPerPage} />
        </div>
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
            return info = newInfo.reverse()
        })
        .catch(error => console.error(error))

    return {
        props: {
            data: info
        }
    }
}
