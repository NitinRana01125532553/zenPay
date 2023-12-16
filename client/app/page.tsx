import Hero from "./_components/Hero";
import Join from "./_components/Join-now";
import Header from "./_components/Navbar";
import Coins from "./_components/coins";
import Why from "./_components/why";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <Coins />
      <Join />
    </div>
  );
}
