import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ value, onChange, label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false); // Boolean

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box flex items-center border p-2 rounded">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange} // Correct casing
          className="w-full bg-transparent text-black outline-none"
        />

        {type === "password" &&
          (showPassword ? (
            <FaEye
              size={22}
              className="text-primary cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={toggleShowPassword}
            />
          ))}
      </div>
    </div>
  );
}

export default Input;
