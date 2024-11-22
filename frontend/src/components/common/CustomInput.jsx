const CustomInput = ({ title, name, type, inputProps }) => {
    return (
      <div className="sm:col-span-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <input
          type={type}
          name={name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...inputProps}
        />
      </div>
    );
  };
  
  export default CustomInput;
  