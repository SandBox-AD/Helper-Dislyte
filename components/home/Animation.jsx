import React from 'react';
import anime from 'animejs';

class Animation extends React.Component {
    componentDidMount() {
        anime({
            targets: '.morphing .polymorph',
            points: [
                {
                    value: [
                        '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                        '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
                    ],
                },
                {
                    value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369',
                },
                {
                    value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369',
                },
                {
                    value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                },
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true,
        });
    }

    render() {
        return (
            <div className="morphing">
                <svg width="140" height="140" viewBox="0 0 140 140">
                    <g fill="none" fillRule="evenodd">
                        <g
                            fill="currentColor"
                            fillOpacity=".15"
                            transform="translate(0 6)"
                        >
                            <polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369" />
                            <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931" />
                            <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911" />
                            <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697" />
                        </g>
                        <polygon
                            className="polymorph"
                            strokeWidth="1"
                            stroke="currentColor"
                            points="70 21.56401892863991 119.129313744896 59.924313744896004 105.03654880614397 124.30129382655996 49.19341135718394 102.9563535815681 39.86198107136009 64.81150995916802 "
                        />
                    </g>
                </svg>
            </div>
        );
    }
}
export default Animation;
