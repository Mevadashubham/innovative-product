import React from "react";
// Components
import { Loader } from "../../components/common/Loader";
import { HeroSection } from "../../components/home/HeroSection";
import { CategoriesSection } from "../../components/home/CategoriesSection";
import { FeaturedProducts } from "../../components/home/FeaturedProducts";
import { PromotionalSection } from "../../components/home/PromotionalSection";
import { Testimonials } from "../../components/home/Testimonials";
import { ContactSection } from "../../components/home/ContactSection";
import { Footer } from "../../components/common/Footer";

// Note: CSS imports should ideally be handled globally or via CSS modules,
// but for now we keep the <link> tags to ensure styles persist until further refactoring.
// Eventually moving these to index.html or importing the CSS files in App.jsx is recommended.

export const LandingPage1 = () => {
  return (
    <div>
      {/* basic metatags and css links are ideally in index.html, keeping them here as per original file structure for now to avoid breaking changes without index.html access */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <title>cla</title>
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/responsive.css" />
      <link rel="icon" href="/assets/images/fevicon.png" type="image/gif" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        media="screen"
      />

      <Loader />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromotionalSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

