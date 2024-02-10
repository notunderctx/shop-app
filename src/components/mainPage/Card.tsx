/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface CardProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rating: object | any;
}
interface StarPlatinumProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rating: object | any;
}

interface PopUpprops extends CardProps {
  showPopup: any;
  setShowPopup: any;
}

const PopUp: React.FC<PopUpprops> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  showPopup,
  setShowPopup,
}) => {
  return showPopup ? (
    <div>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <div className="transform hover:scale-105 border border-slate-300 h-nika2 w-gum2 bg-white rounded-lg p-4 overflow-hidden relative">
          <img src={image} height={200} width={200} className="mx-auto" />
          <p className="font-semibold">{title}</p>
          <div className="text-2xl relative">
            <p className="font-medium text-pretty text-base text-slate-400">
              {"Ksh " + price}
            </p>
            <StarPlatinum rating={rating} />
            <p className="text-sm">{description}</p>
            <p className="text-slate-300 text-xs">{category}</p>

            <button
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-700"
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}>
              &#x2715;
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const StarPlatinum: React.FC<StarPlatinumProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-400">
          &#9733;
        </span>
      );
    }
  }
  return <div className="flex">{stars}</div>;
};

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div onClick={() => setShowPopup(true)}>
      <div className="transform hover:scale-105 border border-slate-300 h-nika w-gumgum bg-white rounded-lg p-4 overflow-hidden cursor-pointer">
        <img src={image} height={200} width={200} className="mx-auto" />
        <p className="font-semibold">{title}</p>
        <p className="text-2xl relative">
          <p className="font-medium text-pretty text-base text-slate-400">
            {"Ksh " + price}
          </p>
          <StarPlatinum rating={rating} />
          <p className="text-sm">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <p className="text-slate-300 text-xs">{category}</p>
        </p>
      </div>
      <PopUp
        title={title}
        description={description}
        price={price}
        image={image}
        category="electronics"
        rating={rating}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
};

export default Card;
