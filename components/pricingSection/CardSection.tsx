import React from "react";
import CardsData from "../../assets/priceCardData.json";
import PricingCard from "./PricingCard";

const CardSection = () => {
  return (
    <section
      className='h-full px-6 sm:px-20 py-12 flex flex-col w-full 
      space-y-24 lg:justify-center lg:items-center '
      id='pricing'>
      <h1
        className='text-7xl self-start font-nunito underline decoration-8 
      decoration-sky-600'>
        Take a chance on me...
      </h1>
      <div className='grid lg:grid-cols-3 gap-10 '>
        {CardsData.map((card) => (
          <div
            key={card.title}
            className={`w-full max-w-md mx-auto ${
              card.popular
                ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-20"
                : "lg:transform lg:scale-90"
            }`}>
            <PricingCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
