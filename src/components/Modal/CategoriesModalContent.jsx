import { useContext } from "react";
import { categoryContext } from "../../App";
export default function CategoriesModalContent() {
  const { setSelectedOption, selectedOption } = useContext(categoryContext);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="category-Container">
        <div className="category-checkbox">
          <label className="category-radioLabel">
            <input
              type="radio"
              name="choice"
              value="Person"
              setSelectedOption
              onChange={handleOptionChange}
              checked={selectedOption === "Person"}
            ></input>
            <div className="category-tagtitle">Person</div>
          </label>

          <label className="category-radioLabel">
            <input
              type="radio"
              name="choice"
              value="Things"
              onChange={handleOptionChange}
              checked={selectedOption === "Things"}
            ></input>
            <div className="category-tagtitle">Thing</div>
          </label>
          <label className="category-radioLabel">
            <input
              type="radio"
              name="choice"
              value="Animals"
              onChange={handleOptionChange}
              checked={selectedOption === "Animals"}
            ></input>
            <div className="category-tagtitle">Animal</div>
          </label>
        </div>

        <div className="category-checkbox">
          <label className="category-radioLabel">
            <input
              type="radio"
              name="choice"
              value="Foods"
              onChange={handleOptionChange}
              checked={selectedOption === "Foods"}
            ></input>
            <div className="category-tagtitle">Food</div>
          </label>

          <label className="category-radioLabel">
            <input
              type="radio"
              name="choice"
              value="Places"
              onChange={handleOptionChange}
              checked={selectedOption === "Places"}
            ></input>
            <div className="category-tagtitle">Place</div>
          </label>
        </div>
      </div>
    </>
  );
}
