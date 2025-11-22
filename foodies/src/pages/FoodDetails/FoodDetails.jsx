import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFoodDetails } from "../../service/foodService";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const FoodDetails = () => {
  const { id } = useParams();
  const { increaseQty } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    const loadFoodDetails = async () => {
      try {
        const foodData = await fetchFoodDetails(id);
        setData(foodData);
      } catch (error) {
        toast.error("Error displaying the food details.");
      }
    };
    loadFoodDetails();
  }, [id]);

  const addToCart = () => {
    increaseQty(data.id);
    navigate("/cart");
  };

  // ✅ Inline styles for green theme
  const styles = {
    image: {
      borderRadius: "18px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
    },
    categoryBadge: {
      backgroundColor: "#4CAF50",
      padding: "6px 12px",
      borderRadius: "6px",
      color: "white",
      fontWeight: 500,
    },
    button: {
      border: "2px solid #4CAF50",
      color: "#4CAF50",
      borderRadius: "10px",
      padding: "10px 18px",
      fontWeight: 600,
      transition: "0.25s ease",
    },
    buttonHover: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    section: {
      backgroundColor: "#f5fff7",
      borderRadius: "20px",
      padding: "25px",
    },
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5" style={styles.section}>
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={data.imageUrl}
              alt={data.name}
              style={styles.image}
            />
          </div>
          <div className="col-md-6">
            <div className="fs-5 mb-1">
              Category:{" "}
              <span style={styles.categoryBadge}>{data.category}</span>
            </div>
            <h1 className="display-5 fw-bolder">{data.name}</h1>
            <div className="fs-4 mb-2 fw-semibold text-success">
              ₹{data.price}.00
            </div>
            <p className="lead text-secondary">{data.description}</p>

            <div className="d-flex">
              <button
                className="btn flex-shrink-0"
                type="button"
                style={styles.button}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.buttonHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.button)
                }
                onClick={addToCart}
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
