import CustomerTable from "@/components/CustomerTable";
import GenderChart from "@/components/GenderChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Technical Test: Customer Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <GenderChart />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="text-gray-500 text-center">Coming Soon: Another Chart</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <CustomerTable />
        </div>
      </div>
    </main>
  );
}
