import React from "react";
import OtherProduct from "../../layouts/OtherProduct";
import ProductFeature from "../../layouts/ProductFeature";
import ReviewSummary from "../../layouts/RiviewSummary";
import CustTestimonial from "../../layouts/CustTestimonial";
import WhyChooseUs from "../../layouts/WhyChooseUs";

const Main = () => {
  return (
    <div>
      <ProductFeature />
      <WhyChooseUs />
      <CustTestimonial />
      <OtherProduct />
      <ReviewSummary />
    </div>
  );
};

export default Main;
