import React from 'react';
import anime from 'animejs';
import style from './css/Loading.module.css';

class LoadingComponent extends React.Component {
    componentDidMount() {
        anime({
            targets: '.animation',
            translateY: [
                { value: 200, duration: 500 },
                { value: 0, duration: 800 },
            ],
            loop: true,
            rotate: {
                value: '1turn',
            },
            borderRadius: 50,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            delay() {
                return anime.random(0, 1000);
            },
            elasticity: 200,
        });
    }

    render() {
        return (
            <div className={`${style.loading}`}>
                <div className={`${style.box} animation ${style.box__red}`} />
                <div className={`${style.box} animation ${style.box__blue}`} />
                <div
                    className={`${style.box} animation ${style.box__yellow}`}
                />
                <div className={`${style.box} animation ${style.box__grey}`} />
            </div>
        );
    }
}

export default LoadingComponent;
