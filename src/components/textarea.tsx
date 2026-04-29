"use client";

import { useRef } from "react";

export default function AutoTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";

      const maxHeight = 200; // 

      if (el.scrollHeight > maxHeight) {
        el.style.height = maxHeight + "px";
        el.style.overflowY = "auto"; 
      } else {
        el.style.height = el.scrollHeight + "px";
        el.style.overflowY = "hidden"; 
      }
    }
  };

  return (
    <textarea
    ref={textareaRef}
    onInput={handleInput}
    placeholder="Soyez précis, concis et plus claire dans votre message."
    rows={4}
    className="
        w-full 
        border border-gray-300 
        rounded-md 
        px-4 py-2 
        text-sm 
        placeholder:text-gray-400
        resize-none
        overflow-hidden
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-900
        transition-all duration-200
        text-gray-600
        custom-scroll
    "
    />
  );
}