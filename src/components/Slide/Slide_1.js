import React from 'react'
import classNames from 'classnames'
import style from './Slide.module.scss'
import imgUrl from './../../img/333.jpg'

const innerClasses = classNames({
    inner: true,
    inner_1: true
})

const Slide1= () => {

    return (
        <div className={innerClasses}>
            <section className={style.content}>
                <div className={style.first}>
                    <h1>
                        My mini-resume
                    </h1> 

                </div>
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

export default Slide1