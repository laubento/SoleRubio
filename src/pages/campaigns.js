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