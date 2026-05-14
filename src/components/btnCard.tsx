export function BtnCard({
  text,
}: {
  text: string;
}) {
  return (
    <div>
      <button
        className="
          bg-yellow-400 
          text-gray-800 
          font-semibold 
          rounded-full
          md:rounded-full 
          sm:rounded-md
          cursor-pointer
          
          px-4 py-2 
          sm:px-3 sm:py-2.5 
          md:px-6 md:py-3
          
          text-sm 
          sm:text-base 
          md:text-md
          
          hover:bg-yellow-300 
          transition
          
          mt-2 sm:mt-4 md:mt-16
          mb-2 sm:mb-4 md:mb-20

          active:scale-95

          shadow-md hover:shadow-lg
          scale-100 hover:scale-105
        "
      >
        {text}
      </button>
    </div>
  );
}