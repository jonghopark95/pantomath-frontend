import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { EffectFade } from "swiper";

// import "swiper/swiper.scss";
// import "swiper/components/effect-fade/effect-fade.scss";

// SwiperCore.use([EffectFade]);

// export default () => {
//   return (
//     <Swiper effect="fade">
//       {[1, 2, 3].map((i, el) => {
//         return <SwiperSlide>Slide {el}</SwiperSlide>;
//       })}
//     </Swiper>
//   );
// };

export default (props) => {
  if (props.newsData.length !== 0) {
    console.log(props.newsData);
  }
  return <h1>ddddd</h1>;
};
