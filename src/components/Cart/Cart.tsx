import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

const data = [
    {
    id: 1,
    img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
    title: "Long Sleeve Graphic T-Shirt",
    isNew: true,
    oldPrice: 19,
    Price: 12,
    },
    {
    id:2,
    img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    Price: 12,
    },
]

  return (
    <div className="Cart">
        <h1 className='title'>Products in your Cart</h1>
        {data?.map(e=>(
            <div className="item">
                <div className="delete">
                    <DeleteOutlinedIcon className="delete"/>
                </div>
                <img src={e.img} alt="" />
                <div className="description">
                    <h1>{e.title}</h1>
                    <div className="price">1 x {e.Price}</div>
                </div>
            </div>

        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart