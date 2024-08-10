export default function Home() {
  return (
    <main className="bg-sky-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-[520px] flex flex-col justify-center items-center gap-4 p-8 rounded-lg shadow-md">
        <div className="text-2xl font-semibold">Тохиргоо</div>
        <div className="font-semibold">Төлбөр</div>
        <div className="w-full text-left font-semibold">Хадгалсан карт:</div>
        <div className="w-full flex justify-between items-center gap-2">
          <img src="mastercard.svg" width={48}/>
          <input placeholder="Картын дугаар" value="**** **** **** 1234" className="w-full px-4 py-2 rounded-md border border-gray-400 text-sm"/>
          <a className="text-sm text-blue-600 text-nowrap cursor-pointer sm:text-base">Карт хасах</a>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
          <img src="visa.svg" width={48}/>
          <input placeholder="Картын дугаар" value="**** **** **** 1234" className="w-full px-4 py-2 rounded-md border border-gray-400 text-sm"/>
          <a className="text-sm text-blue-600 text-nowrap cursor-pointer sm:text-base">Карт хасах</a>
        </div>
        <div className="w-full text-left font-semibold">Шинээр карт нэмэх:</div>
        <div className="w-full text-sm">
          <input placeholder="Карт эзэмшигчийн нэр" className="w-full px-4 py-2 rounded-md border border-gray-400"/>
        </div>
        <div className="w-full flex flex-col gap-4 text-sm sm:flex-row sm:gap-2">
          <input placeholder="Картын дугаар" className="w-full px-4 py-2 rounded-md border border-gray-400 sm:w-3/6"/>
          <input placeholder="Дуусах хугацаа" className="w-full px-4 py-2 rounded-md border border-gray-400 sm:w-2/6"/>
          <input placeholder="CVV" className="w-full px-4 py-2 rounded-md border border-gray-400 sm:w-1/6"/>
        </div>
        <button className="bg-green-400 w-full p-2 rounded-md text-white font-medium hover:bg-green-500">Карт нэмэх</button>
      </div>
    </main>
  );
}
