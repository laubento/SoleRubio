import { NameCampaigns } from "@/components/Campaigns/NameCampaigns/NameCampaigns"
import { ImageCampaigns } from "@/components/Campaigns/ImageCampaigns/ImageCampaings"
import style from '../../styles/campaigns.module.css'
import Pagination from "../../components/Campaigns/Pagination/Pagination";
import { campaigns } from "../../utils";
import { useState } from "react";
import dotenv from 'dotenv';
import { useRouter } from 'next/router';

export default function Campaigns({data}) {
    const router = useRouter();
    console.log(data)


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
    let pepe = ['hola', 'pipol']
    return (
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <NameCampaigns name={pepe} />
                {/* <ImageCampaigns /> */}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    dotenv.config();
    const name = process.env.CLOUD_NAME;
    const key = process.env.CLOUD_KEY;
    const secret = process.env.CLOUD_SECRET
    let info = ''

    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => {return (info = data)})
        .catch(error => console.error(error))

    return {
        props: {
            data: info
        }
    }
}

