import { useState } from 'react';

function App() {
  const getFruits = [
    { id: 1, name: "banana" },
    { id: 2, name: "apple" },
    { id: 3, name: "orange" },
    { id: 4, name: "grapes" },
    { id: 5, name: "watermelon" },
    { id: 6, name: "papaya" },
    { id: 7, name: "guava" },
    { id: 8, name: "lemon" },
    { id: 9, name: "jackfruit" },
    { id: 10, name: "mango" },
    { id: 11, name: "peach" },
    { id: 12, name: "pineapple" },
    { id: 13, name: "raspberry" },
    { id: 14, name: "strawberry" },
  ];
  
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterData = () => {
    if (!inputValue) {
      return [];
    }
    return getFruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const filteredFruits = filterData();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-200">
      <h1 className="text-4xl font-bold text-gray mb-4">SEARCH BAR</h1>
      <div className="w-full max-w-xs">
        <input 
          className="w-full px-3 py-2 leading-tight text-white bg-blue-300 border border-pink-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search fruits..."
        />
        {filteredFruits.length > 0 && (
          <ul className="mt-4 bg-white rounded shadow-lg">
            {filteredFruits.map((fruit) => (
              <li key={fruit.id} className="py-2 px-4 border-b border-gray-200 text-pink-700">
                {fruit.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
