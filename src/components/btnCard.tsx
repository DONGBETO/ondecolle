export function BtnCard({
  text,
}: {
  text: string;
}) {
  return (
    <div className="">
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
          
          mt-10 sm:mt-12 md:mt-16
          mb-12 sm:mb-16 md:mb-20

          active:scale-95

          shadow-md hover:shadow-lg
        "
      >
        {text}
      </button>
    </div>
  );
}