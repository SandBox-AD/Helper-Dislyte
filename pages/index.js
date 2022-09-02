import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import anime from 'animejs';
import Image from 'next/image';
import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        anime({
            targets: '.line-drawing-demo  .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) {
                return i * 250;
            },
            direction: 'alternate',
            loop: true,
        });
    }
    render() {
        return (
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div className='line-drawing-demo'>
                    <svg
                        viewBox="0 0 99.000000 14.000000"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            transform="translate(0.000000,14.000000) scale(0.1,-0.1)"
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="lines"
                        >
                            <path
                                className="el"
                                d="M203 85 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z"
                            />
                            <path
                                className="el"
                                d="M743 85 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z"
                            />
                            <path
                                className="el"
                                d="M0 80 c0 -48 1 -50 28 -50 35 0 52 16 52 50 0 34 -17 50 -52 50 -27 0 -28 -2 -28 -50z m64 18 c13 -21 -2 -51 -28 -56 -13 -3 -16 5 -16 38 0 33 3 41 16 38 9 -2 22 -11 28 -20z"
                            />
                            <path
                                className="el"
                                d="M560 80 c0 -27 5 -50 10 -50 6 0 10 11 10 25 0 18 5 25 20 25 15 0 20 -7 20 -25 0 -14 5 -25 10 -25 6 0 10 23 10 50 0 28 -4 50 -10 50 -5 0 -10 -9 -10 -20 0 -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 11 -4 20 -10 20 -5 0 -10 -22 -10 -50z"
                            />
                            <path
                                className="el"
                                d="M308 108 c-9 -28 7 -73 27 -75 11 -2 14 0 8 3 -16 7 -17 54 -2 54 6 0 4 7 -5 15 -18 18 -23 19 -28 3z"
                            />
                            <path
                                className="el"
                                d="M140 96 c-9 -12 -7 -17 9 -28 27 -16 27 -32 1 -25 -11 3 -20 1 -20 -4 0 -13 38 -11 46 3 4 6 0 16 -9 23 -22 16 -22 39 -1 31 8 -3 12 -2 9 4 -9 14 -21 12 -35 -4z"
                            />
                            <path
                                className="el"
                                d="M375 96 c-10 -7 -16 -22 -13 -37 2 -19 9 -24 33 -26 18 -1 22 1 10 4 -34 9 -41 23 -12 23 20 0 27 5 27 19 0 24 -23 33 -45 17z m25 -16 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z"
                            />
                            <path
                                className="el"
                                d="M675 96 c-10 -7 -16 -22 -13 -37 2 -19 9 -24 33 -26 18 -1 22 1 10 4 -34 9 -41 23 -12 23 20 0 27 5 27 19 0 24 -23 33 -45 17z m27 -18 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z"
                            />
                            <path
                                className="el"
                                d="M798 102 c-15 -3 -18 -14 -17 -55 1 -29 3 -44 6 -35 2 9 14 18 26 20 16 2 23 11 25 34 3 33 -9 43 -40 36z m29 -28 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7 17 -16z"
                            />
                            <path
                                className="el"
                                d="M875 96 c-10 -7 -16 -22 -13 -37 2 -19 9 -24 33 -26 18 -1 22 1 10 4 -34 9 -41 23 -12 23 20 0 27 5 27 19 0 24 -23 33 -45 17z m27 -18 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z"
                            />
                            <path
                                className="el"
                                d="M958 102 c-13 -2 -18 -13 -17 -40 l1 -37 8 29 c5 16 15 33 22 37 16 10 8 16 -14 11z"
                            />
                            <path
                                className="el"
                                d="M103 65 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z"
                            />
                            <path
                                className="el"
                                d="M231 100 c0 -3 6 -27 13 -54 l13 -50 16 49 c10 27 15 51 12 54 -3 3 -9 -5 -12 -18 l-6 -24 -18 24 c-10 13 -18 22 -18 19z"
                            />
                            <path
                                className="el"
                                d="M478 63 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"
                            />
                        </g>
                    </svg>
                </div>
            </Layout>
        );
    }
}
export default Home;
