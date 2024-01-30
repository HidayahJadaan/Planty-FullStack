import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import user from '../../assets/user-6.jpg'
import img5 from "../../assets/user-5.jpg";
import img6 from "../../assets/user-6.jpg";
import img7 from "../../assets/user-2.jpg";
import img8 from "../../assets/user-1.jpg";

export default function Activity() {
  return (
    <div className='activitySection'>
      
      <div className="heading flex">

        <h1>Recent Activity</h1>

        <button className='btn flex'>
          See All  <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer" />

          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">
            2 min
          </div>
        </div>


        <div className="singleCustomer flex">
          <img src={img5} alt="Customer" />

          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">
            8 min
          </div>
        </div>


        <div className="singleCustomer flex">
          <img src={img6} alt="Customer" />

          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">
            13 min
          </div>
        </div>



        <div className="singleCustomer flex">
          <img src={img7} alt="Customer" />

          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">
            7 min
          </div>
        </div>


        <div className="singleCustomer flex">
          <img src={img8} alt="Customer" />

          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">
            21 min
          </div>
        </div>
      </div>
      </div>
  )
}
