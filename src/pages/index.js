import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="h-full w-full bg-black">
      <Header />
      <Footer />
    </div>
  );
}
