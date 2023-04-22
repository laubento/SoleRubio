import style from './Extras.module.css'


export  function Extras({props}){

    return(
        <div className={style['line-container']}>
            {props === 'line' ? <div className={style.line}></div> : null}
            
        </div>
    )

}