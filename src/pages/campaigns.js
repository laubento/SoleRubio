import Pagination from "../components/Campaigns/Pagination/Pagination";
import { campaigns } from "../utils";
import { useState } from "react";

export default function Campaigns() {
  // const [page, setPage] = useState(1);

  // const [campaignsPerPage, setCampaignsPerPage] = useState(2);
  // const indexLastCampaign = page * campaignsPerPage;
  // const indexFirstCampaign = indexLastCampaign - campaignsPerPage;

  // const currentCampaigns = campaigns?.slice(
  //   indexFirstCampaign,
  //   indexLastCampaign
  // );

  // const paging = (number) => {
  //   setPage(number);
  // };

  // return (
  //   <div>
  //     <h1>Campañas</h1>
  //     {currentCampaigns?.map((el) => (
  //       <div>el.image</div>   
  //     ))}

  //     <Pagination
  //       campaigns={campaigns.length}
  //       campaignsPerPage={campaignsPerPage}
  //       paging={paging}
  //       page={page}
  //     />
  //   </div>
  // );
}
import { NameCampaigns } from "@/components/Campaigns/NameCampaigns/NameCampaigns"
import { ImageCampaigns } from "@/components/Campaigns/ImageCampaigns/ImageCampaings"
import style from '../styles/campaigns.module.css'

export default function Campaigns(){

    let pepe = ['REVISTA HOY', 'DROMO', 'KEKIBELE', 'TUSAM', 'FLOWERS']

    return(
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <NameCampaigns name={pepe}/>
                <ImageCampaigns/>
            </div>
        </div>
    )
}