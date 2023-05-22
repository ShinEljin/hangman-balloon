import { useState } from "react";
export default function CategoriesModalContent() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
     <>
     <div className="category-Container">

    <div className="category-checkbox">
        <label className="category-radioLabel" >
            <input
            type="radio"
            name="choice"
            value="person"
            onChange={handleOptionChange}
            checked={selectedOption === 'person'}
            
            ></input>
            <div className="category-tagtitle">
            Person
            </div>
        </label>

        <label className="category-radioLabel" >
            <input
            type="radio"
            name="choice"
            value="thing"
            onChange={handleOptionChange}
            checked={selectedOption === 'thing'}
            
            ></input>
            <div className="category-tagtitle">
            Thing
            </div>
        </label>
        <label className="category-radioLabel" >
            <input
            type="radio"
            name="choice"
            value="animal"
            onChange={handleOptionChange}
            checked={selectedOption === 'animal'}
            
            ></input>
            <div className="category-tagtitle">
            Animal
            </div>
        </label>

    </div>
    
    <div className="category-checkbox">
        <label className="category-radioLabel" >
            <input
            type="radio"
            name="choice"
            value="food"
            onChange={handleOptionChange}
            checked={selectedOption === 'food'}
            
            ></input>
            <div className="category-tagtitle">
            Food
            </div>
        </label>

        <label className="category-radioLabel" >
            <input
            type="radio"
            name="choice"
            value="place"
            onChange={handleOptionChange}
            checked={selectedOption === 'place'}
            
            ></input>
            <div className="category-tagtitle">
            Place
            </div>
        </label>


    </div>


        </div>
     </>
    );
  }
  
