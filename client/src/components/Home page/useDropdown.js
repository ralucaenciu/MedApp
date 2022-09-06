import { useState } from "react";

const useDropdown = (defaultstate, options,title) => {
  const [state, setState] = useState(defaultstate);
  const Dropdownmaker = () => (
    <select
      className="formInput"
      value={state}
      onChange={(e) => setState(e.target.value)}
      onBlur={(e) => setState(e.target.value)}
      disabled={!options.length}
    >
      <option>{title}</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
  return [state, Dropdownmaker, setState];
};

export default useDropdown;
