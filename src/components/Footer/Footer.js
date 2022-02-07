import React, { useContext } from 'react'
import style from './Footer.module.scss'

const Footer= () => {

    return (
        <footer className={style.footer}>
            <div className={style.social}>
                <a className={style.whatsapp} href="https://wa.me/79823336575" target="_blank">wa</a>
                <a className={style.telegram} href="tg://resolve?domain=@frolov_den" target="_blank">tg</a>
                {/* <a className={style.vk} href="https://vk.com/froloffden" target="_blank">vk</a> */}
            </div>
            <div className={style.email}>
                <a href="mailto:denffv@yandex.ru">denffv@yandex.ru</a>
            </div>
            
        </footer>
    )
}

export default Footer