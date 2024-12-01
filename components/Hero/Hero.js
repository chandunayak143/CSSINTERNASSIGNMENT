import React from 'react'
import { MdOutlineHome,MdLogout, MdIncompleteCircle,MdPushPin  } from "react-icons/md";
import { IoSettingsOutline,IoLink ,IoCopyOutline, IoSearch } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { FaAngleRight ,FaUserPlus,FaSortDown , FaRegEyeSlash} from "react-icons/fa";
import { CiLocationOn,  CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSend } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";

import './Hero.css'


const Hero = () => {
  return (
    <div className="hero-section">
     <div className="hero">

      <div className="hero-left">Chat / Feed chat</div>

      <div className="hero-right">
        <MdOutlineHome className="hero-icon-home"/>
        <button className="button">Process Owner HOD</button>
        <button className="btn">Admin</button>
        <p className="desc">Palak BanSai</p>
        <img src="https://i.pinimg.com/736x/a6/cb/c8/a6cbc86014be65551ab52aa287447a8e.jpg" 
        className="user-image" alt="user"/>
        <IoSettingsOutline className="hero-icon-settings"/>
        <MdLogout className='hero-icon-logout'/>
        <p className="desc-logout">Logout</p>
     </div>
     <div className="design-small">
      <MdLogout className='hero-icon-logout'/>
      <p className="desc-logout">Logout</p>
      </div>
      </div>

      <div className="hero-bottom-details">
        <div className="hero-bottom-row-details">

        <div className="hero-details">
        <span className="initial-name one">CB</span>
          <p className="full-name">Cheyenne Bergson</p>
        </div>
        <div className="hero-details">
          <span className="initial-name two">CB</span>
          <p className="full-name">Jonathan Higgins</p>
        </div>
        <div className="hero-details">
          <span className="initial-name three">CB</span>
          <p className="full-name">Capt.Trunk</p>
        </div>
        <div className="hero-details">
          <span className="initial-name four">CB</span>
          <p className="full-name">Hannibal Smi...</p>
        </div>
        <div className="hero-details">
          <span className="initial-name five">CB</span>
          <p className="full-name">Capt.Trunk</p>
        </div>
        <div className="hero-details">
          <span className="initial-name six">CB</span>
          <p className="full-name">Hannibal Smi.. <span className="count">2</span></p>
        </div>
        <div className="hero-details-button">
         <LuMessagesSquare  className="message-icon" />
         <p className="full-name-message">Messaging</p>
        <FaAngleRight className="right-arrow"/>
        </div>

     
      
      </div>
      <div className="account-and-extra-details">

      <div className="account-holder-details-card-one">

        <div className="details">
        <div className="initial-name-card">
          <span className="initial-name-big">CB</span>
          </div>
          <div className="name-and-location-details">
          <p className="full-name-initial">Honnibal Smit</p>
         <p className="location-details"> <CiLocationOn className="location-icon" /> <span className="address">1 Market street sar Function, CA <br/>94105</span></p>
        </div>
        </div>

        <div className="card">

          <div className='card-items'>
          <div>
          <p className="customer-text">Customer ID</p>
          </div>
          <div>
            <span>12345</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <hr/>

          <div className='card-items'>
          <div>
          <p className="customer-text">Email Address</p>
          </div>
          <div>
            <span>rachel@sample.com</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <hr/>
          <div className='card-items'>
          <div>
          <p className="customer-text">Phone Number</p>
          </div>
          <div>
            <span>8051298905</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
  
        </div>
        <div className="add-btn">
          <FiPlusCircle className='plus-icon' /><button>ADD</button>
          </div>

          <div className="card-two">
          <div className='card-items'>
          <div>
          <p className="customer-text">Loyality Tier</p>
          </div>
          <div>
            <span>Silver</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <hr/>
          <div className='card-items'>
          <div>
          <p className="customer-text">Segment</p>
          </div>
          <div>
            <span>Sleepy Customer</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <div className="add-btn-two">
          <FiPlusCircle className='plus-icon-tow' /><button>ADD</button>
          </div>
        </div>

        <div className="card-two">
          <div className='card-items'>
          <div>
          <p className="customer-text">Lifetime Value</p>
          </div>
          <div>
            <span>$ 1M</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <hr/>
          <div className='card-items'>
          <div>
          <p className="customer-text">Propensity to purchase</p>
          </div>
          <div>
            <span> <MdIncompleteCircle className="percentage-one" /> 75%</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <div className="add-btn-two">
          <FiPlusCircle className='plus-icon-tow' /><button>ADD</button>
          </div>
        </div>


        <div className="card-three">
          <div className='card-items'>
          <div>
          <p className="customer-text">Engagment Score</p>
          </div>
          <div>
            <span> <MdIncompleteCircle className="percentage-two" /> 80%</span>
            <BsThreeDotsVertical className='dots' />
          </div>
          </div>
          <div className="add-btn-two">
          <FiPlusCircle className='plus-icon-tow' /><button>ADD</button>
          </div>
        </div>

        <div className="other-agent">
           <span className="other-agent-text"><FaUserPlus/>Assign Oher Agent</span>
        </div>

        <button className="new-widget-btn">Add New Widget</button>
      
      
      </div>


<div className="conversation-attachment-details">
      <div className="conversation-tabs-card">
        <div className="tabs">
          <p className="tabs-name active">Conversation</p>
        </div>
        <div className="tabs">
          <p className="tabs-name">Address Update </p>
          < FaXmark className="x-mark-icon"/>
        </div>
        <div className="tabs">
          <p className="tabs-name">Fee Reversal</p>
          < FaXmark className="x-mark-icon"/>
        </div>
        <button className="tabs-buttons">Escalate</button>
      </div>

      <div className="attachment-details">
        <div className="attachmet-right">
          <p>Conversation</p>
          <p>attachment</p>
        </div>
        <div className="loram-text-card">
            <span>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.</span>
          </div>

          <div className="bottom-card-name">
            <div className="details-card-name">
            <div className="cb-name">
              <span>CB</span>
            </div>
            <div className="name-and-dots">
            <div>
            <p>Rachel Adams</p>
            <p>9:08 PM Received By Whatsapp <TiTick/> </p>
            </div>
            <HiDotsHorizontal className="horizontal-dots" />
            </div>
          </div>
          <div className="loram-text-card">
            <span>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</span>
          </div>
          </div>


          <div className="bottom-card-name">
            <div className="details-card-name">
            <div className="cb-name">
              <span>HK</span>
            </div>
            <div className="name-and-dots">
            <div>
            <p>YOU</p>
            <p>27July, 2024 9:08 PM Sent By Whatsapp<TiTick/> </p>
            </div>
            <HiDotsHorizontal className="horizontal-dots" />
            </div>
          </div>
          <div className="loram-text-card">
            <span>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</span>
          </div>
          </div>
<hr/>

<div className="check-box-container">
  
  <div className="check-box">
    <input type="checkbox" id="checkbox" className="checkbox"/>
    <label htmlFor='checkbox' className="label-text">SMS</label>
  </div>
  <div className="check-box">
    <input type="checkbox" id="whatsapp" className="checkbox"/>
    <label htmlFor='whatsapp' className="label-text">Whatsapp</label>
  </div>
  <div className="check-box">
    <input type="checkbox" id="email" className="checkbox"/>
    <label htmlFor='email' className="label-text">Email</label>
  </div>
</div>

<div className="search-box">
  <input type="search" placeholder='Type a message...' className="search"/>
  <div className="links-con">
    <IoLink  className="link" />
  </div>
  <button className="send-btn">
<BiSend/> Send
</button>
</div>
</div>
</div>

  <div className="account-holder-details-card">
    <div className="card-data">
      <div className="card-1">
        <span>Ask Culture</span>
        <div>
          < CiMail/>
        <span>Whatsapp</span>
        <FaSortDown />
        </div>
        <div>
           <CiMail/>
        <span>Greetings</span>
        <FaSortDown />
        </div>
      </div>
      <div className="rectangel-box">
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.

Scelerisque dui habitant ullamcorper dictum. Feugiat </p>
      <div className="greeting-tamplate">
      <p>Greeting Tamplate</p>
      <button><IoCopyOutline/> Copy to send</button>
      <button>< FaRegEyeSlash/> Previous</button>
      </div>
      <div className="search-card">
        <input type="search" placeholder='Type a message' className='search'/>
        <button><BiSend className="icon-send"/></button>
      </div>
      </div>
      
      </div>

      <div className="card-data-1">
        <p className="action">Action Lunchers</p>
        <div className="search-and-input">
          <IoSearch />
          <input type="search" className="search-bar" placeholder='Search actions...'/>
        </div>

        <div className="new-tab">
        <div className="tab-btns-1">
          <span><FiPlusCircle/>  Add Action</span>
        </div>
        <div className="tab-btns">
          <span>Fee Reversal</span>
        </div>
        <div className="tab-btns">
          <span>Retail Onbrding</span>
        </div>
        <div className="tab-btns">
          <span>Address Update</span>
        </div>
        </div>
      
      </div>

      <div className="card-data-2">
        <div className="pin-adn-text">
        <MdPushPin />
        <span>Case Favourite</span>
        </div>
        <div className="text-card">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt 
        </div>
        <div className="gallery">
          <GrGallery/> <span>Gallery</span>
        </div>
      </div>


    </div>





      </div>
    </div>
    </div>
  )
}

export default Hero