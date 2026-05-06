"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CustomSelect({
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const options = ["Ouémé", "Littoral", "Atlantique", "Zou", "Collines", "Plateau", "Donga", "Alibori", "Borgou", "Atacora", "Mono", "Couffo"];

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
        <span className={!value ? "text-gray-400" : "text-gray-800"}>
          {value || "Votre département"}
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
                onChange(opt);
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