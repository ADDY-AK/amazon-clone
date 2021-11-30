import { Link } from "react-router-dom";
import React from 'react'
import './HeaderTwo.css'

function HeaderTwo() {
    return (
        <div className="headerTwo">
        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineOne">Best Sellers</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Mobiles</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Fashion</span>
            </div>
            <div className="header_option">

            <span className="header_optionLineOne">New Release</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Electronics</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Today's Deal</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Customer Service</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Amazon Pay</span>
            </div>
        </div>
        <Link to="/">
        <img
          className="headerTwo_logo"
          src="https://media-exp1.licdn.com/dms/image/C561BAQFjHL9EU0Yvvg/company-background_10000/0/1619644672652?e=2159024400&v=beta&t=XuCp_lpXR76nK6AAfdrGwZgEVPrlT_sRF1-dZZhw8nE"
          alt="amazon logo"
        />
      </Link>
            
        </div>
    )
}

export default HeaderTwo
