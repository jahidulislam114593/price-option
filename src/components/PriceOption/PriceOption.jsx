import PropTypes from "prop-types";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PriceOption = ({ option }) => {
  const { name, duration, price, benefits, description } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-8 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl font-extrabold my-6 text-center">{name}</h4>
      <div className="pl-4 flex-grow">
        {benefits.map((benefit, idx) => (
          <Benefit key={idx} benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="mt-6 bg-green-600 w-full p-4 rounded-lg font-extrabold hover:bg-green-800">
        Buy
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
