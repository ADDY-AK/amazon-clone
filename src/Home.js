import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
      <Carousel autoPlay={true} infiniteLoop={true} autoFocus={true} showIndicators={false} showStatus={false} showThumbs={false}>
                <div className="carousel_image">
                    <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" alt="amazon prime" />
                </div>
                <div className="carousel_image">
                    <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon prime" />
                </div>
                <div className="carousel_image">
                    <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/1500x600_Hero-Tall_JPN._CB669639160_.jpg" alt="amazon prime" />
                </div>
            </Carousel>
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon prime"
        /> */}
        <div className="home_row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="2"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={299.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._AC_SX450_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Redmi 9A (Nature Green, 2GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor"
            price={109.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC_SL1500_.jpg"
          />
          <Product
            id="4"
            title="Beats Pro Totally Wireless Earphones Apple H1 Headphone chip, Class 1 Bluetooth ®, 9 Hours of Listening time, Sweat-Resistant Earbuds (Cloud Pink)"
            price={209.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51-heAWiioL._AC_UY218_.jpg"
          />
          <Product
            id="5"
            title="ASUS ZenBook Flip 13 OLED, Intel Core i5-1135G7 11th Gen, 13.3 FHD Touch 2-in-1 Laptop (8GB/512GB SSD + 32GB Optane Memory/Windows 10/Office 2019/Iris Xᵉ Graphics/Pine"
            price={1009.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/810RCyEiARL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
            price={2999.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
