import Navbar from "../comps/Navbar";

export default function Layout({ children }) {
  return (
    <div className=" h-screen md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 m-16">
        {children}
      </div>
    </div>
  );
}
