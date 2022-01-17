import React from "react";
import CardsData from "../../assets/priceCardData.json";
import PricingCard from "../pricingCard/PricingCard";

const CardSection = () => {
  return (
    <section
      className='h-full px-6 py-12 lg:justify-center lg:items-center container'
      id='pricing'>
      <div className='grid lg:grid-cols-3 gap-10 '>
        {CardsData.map((card) => (
          <div
            key={card.id}
            className={`w-full max-w-md mx-auto ${
              card.popular
                ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10"
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
