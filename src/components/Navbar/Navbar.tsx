import "./Navbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cart from "../Cart/Cart";


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" /> <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span> <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/Women">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/Men">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/Children">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">SHOPWITHUS</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=> setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar