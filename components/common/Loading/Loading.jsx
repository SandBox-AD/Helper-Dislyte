import React from 'react';
import anime from 'animejs';
import style from './css/Loading.module.css';

class Loading extends React.Component {
    loading = React.createRef();

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
            delay: function () {
                return anime.random(0, 1000);
            },
            elasticity: 200,
        });
    }

    render() {
        return (
            <div className={`${style.loading}`}>
                <div
                    className={`${style.box} animation ${style.box__red}`}
                ></div>
                <div
                    className={`${style.box} animation ${style.box__blue}`}
                ></div>
                <div
                    className={`${style.box} animation ${style.box__yellow}`}
                ></div>
                <div
                    className={`${style.box} animation ${style.box__grey}`}
                ></div>
            </div>
        );
    }
}

export default Loading;
