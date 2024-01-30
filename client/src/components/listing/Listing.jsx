import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../assets/pl15.jpg";
import img1 from "../../assets/pl6.png";
import img2 from "../../assets/pl8.jpg";
import img3 from "../../assets/pl4.jpg";
import img4 from "../../assets/user-4.jpg";
import img5 from "../../assets/user-5.jpg";
import img6 from "../../assets/user-6.jpg";
import img7 from "../../assets/user-2.jpg";
import img8 from "../../assets/user-1.jpg";

export default function Listing() {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="Image Name" />
          <h3>Coffe Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSeller">
          <div className="heading flex">
            <h3>Top Sellers</h3>

            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={img7} alt="User Image" />
              <img src={img5} alt="User Image" />
              <img src={img6} alt="User Image" />
              <img src={img8} alt="User Image" />
            </div>

            <div className="cardText">
              <span>14,556 Plant sold <br/> 
              <small>21 Sellers <span className="date">7 Days</span> </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSeller">
          <div className="heading flex">
            <h3>Featured Sellers</h3>

            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img6} alt="User Image" />
              <img src={img7} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img8} alt="User Image" />
              <img src={img5} alt="User Image" />
            </div>

            <div className="cardText">
              <span>28,556 Plant sold <br/> 
              <small>26 Sellers <span className="date">31 Days</span> </small>
              </span>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
