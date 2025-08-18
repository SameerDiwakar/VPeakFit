import React from "react";
import logoImage from "../../../assets/logo.jpeg";

const Logo = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Achieve Your <span className="text-primary-600">Peak Fitness</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto md:mx-0">
            Personalized diet and exercise plans to help you reach your wellness goals. Track your progress, stay motivated, and transform your health.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img className="rounded-full shadow-2xl w-64 h-64 object-cover" src={logoImage} alt="VPeakFit Logo" />
        </div>
      </div>
    </section>
  );
};

export default Logo;
