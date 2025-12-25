import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImg from "../assets/about.webp";

const About = () => {
  const [showMoreLegacy, setShowMoreLegacy] = useState(false);
  const [showMoreBottle, setShowMoreBottle] = useState(false);

  return (
    <section className="w-full py-10 md:py-20 bg-[#FDF2D2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6 md:px-12">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] lg:w-[460px] lg:h-[580px]">
            {/* <div className="absolute inset-0 bg-[#FEF3F3] rounded-2xl"></div> */}

            <img
              src={aboutImg}
              alt="About"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[96%] h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT TEXT – unchanged content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            ARJUN SAJNANI
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-[18px]">

            For most people, flavour is an ingredient.
            For Chef Arjun Sajnani, flavour has been a lifelong discipline — shaped across continents, kitchens, and decades of obsessive curiosity.
            Long before Sunny’s became a Bangalore icon, Arjun’s world revolved around two great loves: food and theatre. After finishing school in Delhi, he left for the United States, studying English Literature and Drama at the University of the South in Tennessee — graduating with honours. But New York is where the spark truly caught fire. Working in some of the city’s finest restaurants, Arjun found himself drifting from the floor to the kitchen, learning the rhythms, rigor, and revelations of real American cuisine.
            Those years built the palate, the precision, and the instinct that would later define Sunny’s.

          </p>
        </div>
      </div>

      {/* LOWER SECTIONS (content untouched) */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 lg:mt-32 px-6 space-y-16">

        {/* Legacy Section */}
        <div>
          <h3 className="font-Futura text-xl md:text-2xl font-medium text-gray-800 mb-6">
            Legacy of Sunny’s Restaurant
          </h3>

          <div className="space-y-5">
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              Back in 1995, after years in New York’s vibrant culinary world, Chef Arjun Sajnani returned to Bangalore with a vision — to create a space where flavour, authenticity, and simplicity came first.
              That vision became Sunny’s, a restaurant that quickly earned a devoted following and a reputation for honest, ingredient-driven French-Italian cuisine.

            </p>

            {showMoreLegacy && (
              <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
                Sunny’s didn’t rely on theatrics or trends. Its charm came from the way Arjun cooked — with clarity, balance, and an instinct for flavour that made the food feel both comforting and quietly sophisticated.
                Nearly three decades later, that legacy remains unchanged:
                real food, crafted with real care, served without compromise.
                It’s this very philosophy that now lives inside Sunny’s In A Bottle — a continuation of Arjun’s culinary journey, brought straight to your home.


              </p>
            )}

            <button
              onClick={() => setShowMoreLegacy(!showMoreLegacy)}
              className="mt-2 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] rounded-2xl hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2"
            >
              {showMoreLegacy ? "Show Less" : "Read More"} <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Bottle Section */}
        <div>
          <h3 className="font-Futura text-xl md:text-2xl font-medium text-gray-800 mb-6">
            SUNNY’S IN A BOTTLE
          </h3>

          <div className="space-y-5">
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              If you’ve ever had a Sunny’s salad, you already know: the dressings have a fanbase of their own.
              So it felt inevitable — almost overdue to bottle the flavours people kept coming back for.
              During the pandemic, when the world paused, Arjun didn’t. He used the time to finally bring Sunny’s signature dressings, sauces, and marinades into people’s homes. Not as factory-made shortcuts, but as chef-crafted blends built on the same philosophy Sunny’s was founded on:
              freshness, balance, purity, and flavour that never lies.

            </p>

            {showMoreBottle && (
              <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
                Every bottle is made the way Arjun cooks — with instinct, discipline, and a refusal to compromise on ingredients. Vegan, all-natural, free of preservatives, and designed to make good food effortless.
                Sunny’s In A Bottle isn’t “inspired by the restaurant.”
                It is the restaurant — the legacy, the palate, the taste — distilled into drizzles, marinades, sauces, and moments.

              </p>
            )}

            <button
              onClick={() => setShowMoreBottle(!showMoreBottle)}
              className="mt-2 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] rounded-2xl hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2"
            >
              {showMoreBottle ? "Show Less" : "Read More"} <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Philosophy Section */}
        <div>
          <h3 className="font-Futura text-xl md:text-2xl font-medium text-gray-800 mb-6">
            OUR PHILOSOPHY
          </h3>

          <div className="space-y-5">
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              We don’t believe in shortcuts only in good taste.
              Whether you’re tossing greens, marinating paneer, grilling chicken, prepping a weekday dinner, or elevating a lazy Sunday brunch, Sunny’s helps you cook like someone who knows what they’re doing even on the days you don’t.
              Real ingredients. Real nourishment. Real flavour.
              A little gourmet, a little cheeky, and always unapologetically delicious.


            </p>

            {showMoreBottle && (
              <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
                From our kitchens to yours Sunny’s in a bottle carry three decades of a chef’s instinct — not to impress, but to delight.
                Here’s to meals that feel effortless, flavours that feel familiar, and a legacy you can now pour, drizzle, mix, or marinate into anything you cook.
                Sunny’s In A Bottle — Restaurant flavour, bottled for real life.


              </p>
            )}

            <button
              onClick={() => setShowMoreBottle(!showMoreBottle)}
              className="mt-2 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] rounded-2xl hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2"
            >
              {showMoreBottle ? "Show Less" : "Read More"} <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
