import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
    <div className="cart-container">
    {cart.length === 0 && <div className="container " style={{
      display:"flex",
      flexDirection: "column",
      gap:"20px"
    }}>
      <h1 className="text-center" >No Product </h1>
      <Link to={"/"}><button className="btn btn-danger">Shopping here</button></Link>
    </div>}

      {cart.map((product) => {
        return (
          <>
          <div class="card mb-3 my-5 p-md-2 align-items-center font-monospace text-bg-primary" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={product.imgSrc} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">
                  {product.description}
                </p>
                <button className="btn btn-danger mx-3">
                      {product.price} ₹
                    </button>
                    <button
                      className="btn btn-warning"
                    >
                      Buy Now
                    </button>
              </div>
            </div>
          </div>
        </div>
          </>
        )
      })}
      </div>

      {cart.length !== 0 && <div className="footer-button " style={{
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
        margin: "30px 0",
        gap: "20px"
      }} >
        <button className="btn btn-danger">Chekout</button>
        <button onClick={() => setCart([])} className="btn btn-info">Clear Cart</button>
      </div> }
      
    
    </>
  )
}

export default Cart
