import React from "react";
import { descInfo, description } from "../../utils/descData";

const Desc = () => {
  return (
    <div className="w-full lg:w-9/12 mx-auto mt-8 lg:mt-16">
      <div className="leading-7 text-15 font-normal mb-16 text-gray-500">
        <p className="">
          Although the legendary Double Burger really needs no introduction,
          please allow us… Tucked in between three soft buns are two all-beef
          patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce.
          Hesburger’s own paprika and cucumber mayonnaise add the crowning
          touch. Oh baby!
        </p>
        <p className="mt-3">
          <span className="font-bold">Ingredients: </span> Dr. Praeger’s Black
          Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss
          Cheese
        </p>
      </div>
      <div className="">
        <ul className="flex flex-row md:flex-col ">
          <ul className="flex items-center justify-between flex-col md:flex-row w-full">
            {description.map((item, index) => (
              <li
                key={index}
                className={`flex-1 border-r md:border-r-0 w-full h-full text-center md:text-left py-10 px-2
                ${index === description.length - 1 ? 'border-b-0' : 'border-b'}`}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-15 text-gray-500 font-medium">{item.info}</p>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between items-center flex-col md:flex-row w-full">
            {descInfo.map((item, index) => (
              <li
                key={index}
                className={`first:text-2x  md:border-b-0 justify-center md:justify-start  
                first:font-bold flex items-center py-10 px-2 w-full md:text-left flex-1
              text-15 font-medium ${
                index === 0 ? "text-black text-xl" : "text-gray-500"
              } ${index === descInfo.length - 1 ? 'border-b-0' : 'border-b'}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Desc;
