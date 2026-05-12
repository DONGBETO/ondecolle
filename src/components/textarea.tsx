"use client";

import { useEffect, useRef } from "react";

type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function AutoTextarea({ name, value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResize = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 200;

    if (el.scrollHeight > maxHeight) {
      el.style.height = maxHeight + "px";
      el.style.overflowY = "auto";
    } else {
      el.style.height = el.scrollHeight + "px";
      el.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    handleResize();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e);
        handleResize();
      }}
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
        focus:ring-yellow-400
        transition-all duration-200
        text-gray-700
      "
    />
  );
}