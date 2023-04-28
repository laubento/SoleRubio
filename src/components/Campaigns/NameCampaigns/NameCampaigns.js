import style from './NameCampaigns.module.css'
import Link from 'next/link'
export function NameCampaigns({data}){

    return(
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <ul>
                    {data.map((id) => {
                        let separate = id.name.split(' ')
                        let complete = separate.join('_')
                        return(
                            <li key={id}><Link href={`/campaigns/` + complete}>{id.name}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}