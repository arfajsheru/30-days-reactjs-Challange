import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, imgSrc, description) => {
    const obj = {
      id,
      price,
      title,
      imgSrc,
      description,
    };
    setCart([...cart, obj]);
    toast.success(`${title} Item was add in cart`, {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    console.log(cart);
  };
  return (
    <>
    
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <div 
                key={product.id}
                className="col-lg-4 col-md-6 my-3 text-center"
              >
                <div className="card " style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.imgSrc,
                          product.description
                        )
                      }
                      className="btn btn-warning"
                    >
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Product;
