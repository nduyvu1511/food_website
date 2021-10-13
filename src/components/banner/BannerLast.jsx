import React from "react";
import banner1 from "../../assets/img/banner/h1_shape-2.png";
import banner2 from "../../assets/img/banner/h1_shape-3.png";
import banner3 from "../../assets/img/banner/h1_shape-4.png";
import { BannerLastItems } from "./BannerLastItems";

const BannerLast = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <BannerLastItems
        color="green"
        image={banner1}
        name="Meals"
        price={19.99}
        type="Fast Food"
      />
      <BannerLastItems
        color="bannerOrange"
        image={banner2}
        name="Burgers"
        price={12.99}
        type="House"
      />
      <BannerLastItems
        color="bannerYellow"
        image={banner3}
        name="Salats"
        price={10.99}
        type="Salats"
      />
    </section>
  );
};

export default BannerLast;
