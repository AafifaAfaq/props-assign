
import ParentComponent from "./components/ParentComponent";
export default function Home() {
  return (
    <main>
      <h1 className="bg-gray-400 text-4xl text-gray-900  w-full text-center py-2 font-semibold">Props Assignment</h1>
      <ParentComponent/>
    </main>
  );
}
