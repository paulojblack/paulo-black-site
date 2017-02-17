import React from 'react';

const Slider = require('nuka-carousel');

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

export default class Carousel extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <Slider>
            <div><img src="../../favicon.ico" alt="blep" /></div>
            <div><img src="../../favicon.ico" alt="blep" /></div>
          </Slider>
        );
    }
}
