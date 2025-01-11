const Dropdown = ({ onChange }) => {
  return (
    <>
      <select className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => onChange(e.target.value)}>
      <option value="">Select</option>
        <option value="Plus">Plus</option>
        <option value="Minus">Minus</option>
        <option value="Reset">Reset</option>
      </select>
    </>
  );
};

export default Dropdown;