import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div>Test is working good 🐒</div>
        </div>

        <BottomNavBar />
      </section>

    </>
  );
}
