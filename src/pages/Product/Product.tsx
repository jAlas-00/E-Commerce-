import { useState } from "react"
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity, setquantity] = useState(0)
  const images = [
    "https://images.pexels.com/photos/10026481/pexels-photo-10026481.jpeg?auto=compress&cs=tinys rgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinys rgb&w=1600",
  ]

  return (
    <div className="Product">
      <div className="left">
        <div className="Images">
          <img src={images[0]} onClick={e=> setSelectedImg(0)} alt="" />
          <img src={images[1]} onClick={e=> setSelectedImg(1)} alt="" />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia quod commodi voluptate doloribus at similique rerum dolores porro. Praesentium, enim sequi? Ut iusto quas accusantium ullam mollitia vero nisi.</p>
        <div className="count">
          <button onClick={()=> setquantity(quantity === 0 ? 0: quantity - 1 )}>-</button>
          {quantity}
          <button onClick={()=> setquantity(quantity + 1 )}>+</button>
        </div>
        <button className="ADD">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
        <div className="item"><FavoriteBorderIcon/> ADD TO WISH LIST</div>
        <div className="item"><BalanceIcon/>ADD TO COMPARE</div>
        </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
            <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default Product