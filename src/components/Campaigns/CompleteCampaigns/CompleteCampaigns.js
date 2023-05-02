import Link from "next/link"
import Image from "next/image"
import style from './CompleteCampaigns.module.css'

export function CompleteCampiagns({data}){


    return(
        <div className={style["container-main"]}>
            {data.map((el) => {
                let test = el.name.split(' ')
                let nameUrl = test.join('_')
                return(
                    <div className={style["container-campaigns"]} key={el.name}>
                        <div className={style["container-text"]}>
                            <p><Link href={'/campaigns/' + nameUrl}>{el.name}</Link></p>
                        </div>
                        <div className={style["container-img"]}>
                            <Link href={'/campaigns/' + nameUrl}>
                                <Image  src={el.url} alt={el.name} width={200} height={200}/>
                                <p>{el.name}</p>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}