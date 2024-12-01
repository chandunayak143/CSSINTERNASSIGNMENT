// src/components/Sidebar.jsx
import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineFileSearch,AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { PiNetworkBold,PiNumberCircleOne, PiNumberCircleTwoDuotone } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { GrCube } from "react-icons/gr";
import { BsWrenchAdjustable, BsStars } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  const [open,setOpen] = useState(true);
   
  const onClickIcon = () => {
    setOpen( !open)
  }
  return (
    <div className="nav-side-bar">
    <div className={`${open ? "sidebar"  : "side-bar-close"}`}>
      <img src="https://s3-alpha-sig.figma.com/img/2256/f75b/28fdeb1cca31293321203f289a781c25?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcHHj9Xx-7qoA9QPQFRIbI67AjYdCBuA6t9hwSePizTdQRTC-Tuz-6V58rUCEHtza-cS7Tmf2RA2l~lEiWmrBkhEfd7IGqPb1S30ZvUOqtBcV1IeXxahNykviJGuVs4EOhxPUgSXml15Eu8QZwtvzPIr7QQriq0ZnsYLtgL3a60XFZE8ojxLBLPvaivwBSKVwlsbs59Ka-oJ032~aa49TeLuNrzqTDObKaMdoU5DxnzQTZifbCncsDFbDV-TWH~DzVB6lSmOHALk9UBvrLFCUntc-uCP~zpf~uIPdlplhOoJ0O498OYf-NTUo4pti2B98uFTmNZZnby9do6qbKqwTg__"
       className= {`${open ? "side-bar-logo" : "side-bar-logo-small"}`} alt="logo"/>

       <div className= {`${open ? "greater-icon" : "greater-icon-close"}`}>
       <FaGreaterThan className="greater-icon-one"  onClick={onClickIcon} />
       </div>
       <div className= {`${open ? "menu-list" : "menu-list-low-width"}`}>

      <div className={`${open ? "menu-item" : "menu-item-center"}`} >
        <AiOutlineFileSearch className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Inter Audit</span>
      </div>

      <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <AiOutlineFileDone className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>UAT Testing</span>
      </div>

      <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <HiOutlineLink className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Intract</span>
      
      </div>

      <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <FiUsers  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Queue</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <PiNetworkBold  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Work Flow</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <LuUser2 className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Admit</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <GrCube className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Asset</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <FiUsers className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Parent</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <PiNumberCircleOne  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Option One</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <PiNumberCircleTwoDuotone className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Option Two</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <BsWrenchAdjustable  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>ALL Accessories</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <AiOutlineFileSearch  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Internal Audit</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <BsStars  className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Decorating</span>
       </div>

       <div className={`${open ? "menu-item" : "menu-item-center"}`}>
        <IoGiftOutline   className="icon" />
        <span className={`${open ? "text" : "text-close"}`}>Presenting</span>
       </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
