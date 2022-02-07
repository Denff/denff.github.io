import React from 'react'
import style from './Slide.module.scss'
import imgUrl from './../../img/333.jpg'

const Slide4= () => {

    return (
        <div className="inner inner_4">
            <section className={style.content}>
                <figure className={style.fourth}>
                    <figcaption className={style.photo_info}>
                        <span>frontend dev</span>
                    </figcaption>
                    <div className={style.photo}>
                        <img title="it's me" alt="Denis Frolov" src={imgUrl}/>
                    </div>

                </figure>
                <blockquote className={style.letter}>
                    
                    <br/>  
                    <br/> 
                    {/* <hr/> */}
                </blockquote>
           </section>
        </div>
    )
}

export default Slide4