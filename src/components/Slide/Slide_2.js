import React from 'react';
import classNames from 'classnames';
import wood from './../../img/wood.jpg';
import style from './Slide.module.scss';

const innerClasses = classNames({
    inner: true,
    inner_2: true
});

const dataSites = [
    { id: 1, href: "https://millsfield.com/", name: "millsfield.com" },
    { id: 2, href: "https://tmidv.ru/", name: "Техмашинвест" },
    { id: 3, href: "https://iqkomarov.ru", name: "iqkomarov.ru" },
    { id: 4, href: "http://dvizhuch.ru/", name: "Движуч" },
    { id: 5, href: "http://specavtomash-m.ru/", name: "Спецавтомаш" },
    { id: 6, href: "https://avto-llumar.ru/", name: "Тонировка" },
    // { id: 7, href: "https://landdesigner.ru/", name: "landdesign" },
];

const Slide2 = () => {

    const links = dataSites.map(link => {
        return (
            <a 
                target='_blank' 
                rel='noreferrer' 
                className={style.site}
                key={link.id} 
                href={link.href}
            >
                {link.name}
            </a>
        )
    });

    return (
        <div className={innerClasses} 
            style= {{
                backgroundImage: `url(${wood})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <section className={style.content}>
                <div className={style.portfolio}>
                    {links}
                </div>
            </section>
        </div>
    )
}

export default Slide2;