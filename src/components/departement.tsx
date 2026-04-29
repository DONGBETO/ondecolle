"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Votre département");

  const options = ["Ouémé", "Littoral", "Atlantique"];

  return (
    <div className="relative w-full">
      
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="
          border border-gray-300 
          px-4 py-2 
          rounded-md 
          cursor-pointer 
          bg-white
          flex items-center justify-between
        "
      >
        {/* Texte */}
        <span className={value === "Votre département" ? "text-gray-400" : "text-gray-800"}>
          {value}
        </span>

        {/* Icône */}
        <ChevronDown
          size={18}
          className={`
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
            text-gray-400
          `}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-10 overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="
                px-4 py-2 
                hover:bg-blue-900 
                hover:text-white 
                cursor-pointer
                text-gray-500
              "
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}