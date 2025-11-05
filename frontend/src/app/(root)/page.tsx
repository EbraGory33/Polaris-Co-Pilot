// export default function Home() {
//   return (
//     <div>
//       <p className="text-3xl font-bold underline text-sky-400">Hello world!</p>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* Row 1: Summary Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card">
          <h3 className="text-gray-600 text-sm">Total Balance</h3>
          <p className="text-2xl font-bold">$240,399</p>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm">Goals</h3>
          <p className="text-lg">$20,000</p>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm">Upcoming Bills</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Figma - Monthly</span>
              <span>$150</span>
            </li>
            <li className="flex justify-between">
              <span>Adobe - Yearly</span>
              <span>$559</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2: Transactions + Chart */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card">
          <h3 className="text-gray-600 text-sm">Recent Transactions</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between">
              <span>GTR 5</span>
              <span>$160.00</span>
            </li>
            <li className="flex justify-between">
              <span>Polo Shirt</span>
              <span>$20.00</span>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-gray-600 text-sm">Weekly Comparison</h3>
          {/* TODO: chart.js or recharts component here */}
          <div className="mt-3 h-40 bg-gray-100 flex items-center justify-center">
            Chart goes here
          </div>
        </div>
      </div>

      {/* Row 3: Expenses Breakdown */}
      <div className="card">
        <h3 className="text-gray-600 text-sm mb-4">Expenses Breakdown</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center">
            <p className="font-semibold">$250</p>
            <span className="text-xs text-gray-500">Housing</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold">$350</p>
            <span className="text-xs text-gray-500">Food</span>
          </div>
          {/* repeat categories */}
        </div>
      </div>
    </div>
  );
}
