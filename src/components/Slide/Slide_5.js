import React from 'react';
import classNames from 'classnames';
import interier from './../../img/interier.jpg';
import style from './Slide.module.scss';
import sites from './../../data.json';

const innerClasses = classNames({
    inner: true,
    inner_5: true
});

const Slide5 = () => {

    const sitesLinks = sites.map(link => {
        return (
            <a 
                target='_blank' 
                rel='noreferrer' 
                className={style.toSite} 
                key={link.id} 
                href={'https://' + link.name}
            >
                {link.name}
            </a>
        )
    });

    return (
        <div className={innerClasses} 
            style= {{
                backgroundImage: `url(${interier})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
           <section className={style.content}>
                <div className={style.fifth}>
                    Works on some sites:
                    <div className={style.works}>
                        {sitesLinks}
                    </div>
                    Have a nice day!
                </div>
           </section>
        </div>
    )
};

export default Slide5;