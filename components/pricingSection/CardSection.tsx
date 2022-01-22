import React from "react";
import CardsData from "../../assets/priceCardData.json";
import PricingCard from "./PricingCard";

const CardSection = () => {
  return (
    <section
      id='pricing'
      className='flex flex-col w-screen justify-center items-center'>
      <div className='h-full py-10 mb-10 w-5/6 flex flex-col space-y-20 container'>
        <h1
          className='sm:text-7xl text-5xl self-start mb-6 font-nunito py-5 underline decoration-8 
      decoration-sky-600'>
          Best Investment Ever
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
      </div>
    </section>
  );
};

export default CardSection;
