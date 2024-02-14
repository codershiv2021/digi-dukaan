import React from 'react'
import Navbar from "../components/Navibar";
import Slider from "../components/slider";
import Announcement from "../components/Announcement";
import Categories from '../components/Categories';
import Products from '../components/products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
};

export default Home;
