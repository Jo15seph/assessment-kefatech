import { useState } from 'react';
import Counter from './counter/Counter';
import Dropdown from './counter/fields/Dropdown';
import HeaderHOC from './counter/HeaderHOC';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);

  const handleDropdownChange = (action) => {
    // Perform operation based on the dropdown selection
    if (action === 'Plus') setCounter((prev) => prev + 1);
    if (action === 'Minus') setCounter((prev) => prev - 1);
    if (action === 'Reset') setCounter(0);
  };

  return (
    <>
        <div className="bg-indigo-100 py-6 md:py-12">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-medium mb-2">Welcome to the Dashboard</h1>
                </div>
            </div>
        </div>
        <div className="bg-indigo-100 py-6 md:py-12">
            <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/6 sm:w-1/4 h-12 rounded-md bg-blue-500 text-white p-2 text-center">
                <Counter value={counter} />
              </div>
              <div className="w-full md:w-1/6 sm:w-1/4 text-white p-4">
                <Dropdown onChange={handleDropdownChange} />
              </div>
            </div>
            </div>
        </div>
    </>
    
  );
};

export default HeaderHOC(Dashboard);