import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { addFood } from "../../services/foodService";
import { toast } from "react-toastify";

const AddFood = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    try {
      await addFood(data, image);
      toast.success("Food added successfully.");
      setData({ name: "", description: "", category: "Biryani", price: "" });
      setImage(null);
    } catch (error) {
      toast.error("Error adding food.");
    }
  };

  return (
    <div className="mx-2 mt-3">
      <div className="row justify-content-center">
        <div
          className="card col-md-5 shadow-sm"
          style={{ borderRadius: "14px", border: "1px solid #e6e6e6" }}
        >
          <div className="card-body">
            <h2
              className="mb-4"
              style={{ color: "#008000", fontWeight: "600", fontSize: "26px" }}
            >
              Add Food
            </h2>

            <form onSubmit={onSubmitHandler}>
              <div className="mb-3 text-center">
                <label
                  htmlFor="image"
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    border: "2px dashed #8dd88d",
                    padding: "10px",
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt=""
                    width={110}
                    style={{ borderRadius: "10px" }}
                  />
                </label>
                <input
                  type="file"
                  id="image"
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Chicken Biryani"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label fw-semibold">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Write description..."
                  id="description"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label fw-semibold">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="Biryani">Biryani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label fw-semibold">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="₹200"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#008000",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Save Food Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
