export function BtnCard({
text
}: {
  text: string;
}) {
  return (
    <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition mt-16">
      <button className="text-gray-800 text-sm leading-relaxed cursor-pointer">{text}</button>
    </div>
  );
}