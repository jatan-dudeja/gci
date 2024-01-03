

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24`}
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl text-black font-bold p-4">Diversify your portfolio beyound FDs, Mutual Funds and Stocks</span>
        <span className="text-2xl text-black font-bold p-4">Get monthly fixed income</span>
      </div>
     
      <div className="mt-12">
        <button className="rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300">
          Start Earning
        </button>
      </div>
    </main>
  );
}
