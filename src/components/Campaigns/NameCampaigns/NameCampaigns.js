import style from './NameCampaigns.module.css'

export function NameCampaigns({name}){

    return(
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <ul>
                    {name.map((id) => {
                        return(
                            <li key={id}>{id}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}