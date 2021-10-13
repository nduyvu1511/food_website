import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/news/blog-1.jpg";
import img2 from "../../assets/img/news/blog-2.jpg";
import img3 from "../../assets/img/news/blog-3.jpg";
import { NewsItem } from "./NewsItem";

const News = () => {
  return (
    <section className="mt-20 layout">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-40">
          Lastest news
        </h1>
        <Link to="/" className="flex items-center">
          <p className="mr-2">See all</p>
          <button className="w-7 h-7 flex items-center justify-center rounded-md bg-green">
            <FiChevronRight className="text-white text-base" />
          </button>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsItem
          title="10 Reasons To Do A Digital Detox Challenge"
          desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet
                eturpis varius per a augue magna hac. Nec hac…"
          img={img1}
        />
        <NewsItem
          title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
          desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…"
          img={img2}
        />
        <NewsItem
          title="Traditional Soft Pretzels with Sweet Beer Cheese"
          desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…"
          img={img3}
        />
      </div>
    </section>
  );
};

export default News;
