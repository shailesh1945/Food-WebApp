import React, { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const ExploreFood = () => {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Inline theme styles
  const theme = {
    input: {
      border: "2px solid #d7e9dd",
      borderRadius: "10px",
      padding: "10px",
      transition: "0.25s ease",
    },
    inputFocus: {
      borderColor: "#4CAF50",
      boxShadow: "0 0 6px rgba(76, 175, 80, 0.3)",
    },
    select: {
      maxWidth: "150px",
      border: "2px solid #d7e9dd",
      borderRadius: "10px",
      padding: "10px",
      cursor: "pointer",
    },
    button: {
      background: "#4CAF50",
      borderColor: "#4CAF50",
      padding: "10px 18px",
      borderRadius: "10px",
      transition: "0.25s ease",
    },
    buttonHover: {
      background: "#2E7D32",
      borderColor: "#2E7D32",
    },
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-3">
                <select
                  className="form-select mt-2"
                  onChange={(e) => setCategory(e.target.value)}
                  style={theme.select}
                >
                  <option value="All">All</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Burger">Burger</option>
                  <option value="Cake">Cakes</option>
                  <option value="Ice cream">Ice Creams</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                </select>

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Search your favorite dish..."
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  style={theme.input}
                  onFocus={(e) => Object.assign(e.target.style, theme.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, theme.input)}
                />

                <button
                  className="btn mt-2"
                  type="submit"
                  style={theme.button}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, theme.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, theme.button)
                  }
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FoodDisplay category={category} searchText={searchText} />
    </>
  );
};

export default ExploreFood;
