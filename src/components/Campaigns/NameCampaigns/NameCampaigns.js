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
    return(
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <ul>
                    {data.map((id, i) => {
                        let separate = id.name.split(' ')
                        let complete = separate.join('_')
                        return(
                            <li key={id} className={state && i === 0 ? style["active"] : null}><Link className={style.Link} href={`/campaigns/` + complete}>{id.name}</Link></li>
                        )
                    })}
                    <li><Link className={style.Linkk} href={`/campaigns/`}>Volver a camapañas</Link></li>
                </ul>
            </div>
        </div>
    )
}