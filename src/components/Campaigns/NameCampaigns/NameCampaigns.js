import style from './NameCampaigns.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

export function NameCampaigns({data}){
    const router = useRouter();
    const urlActual = router.asPath.split('/')
    let state = false
    if(data[0].name.split(' ').join('_') === urlActual[2]){
        state = true
    }
    console.log(state)
    return(
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <ul>
                    {data.map((id, i) => {
                        let separate = id.name.split(' ')
                        let complete = separate.join('_')
                        return(
                            <li key={id} className={state && i === 0 ? style["active"] : null}><Link href={`/campaigns/` + complete}>{id.name}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}