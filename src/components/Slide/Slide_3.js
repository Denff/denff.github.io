import React from 'react'
import classNames from 'classnames';
import steel from './../../img/steel-blue.jpg'
import style from './Slide.module.scss'

const innerClasses = classNames({
    inner: true,
    inner_3: true
})

const Slide3= () => {

    return (
        <div className={innerClasses} 
            style= {{
                backgroundImage: `url(${steel})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

            }}
        >
            <section className={style.content}>
                <div className={style.third}>
                    <span className={style.shadow}><b><i>hard skills:</i></b></span>
                    <ul>
                        <li className={style.tec}>html5</li>
                        <li className={style.tec}>css3, scss, postcss</li>
                        <li className={style.tec}>gulp</li>
                        <li className={style.tec}>vanillajs, jquery</li>
                    </ul>
                    {/* <span className={style.shadow}><i>soft skills по телефону</i></span> */}
                </div>
           </section>
        </div>
    )
}

export default Slide3