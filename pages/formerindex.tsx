import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen  ">
      <Header />
      <div className="flex flex-col justify-center items-center  py-16 space-y-8 sm:px-6 lg:px-8">
        <div className="h1">
          There you go... a canvas for your next Celo project!
        </div>
        {isConnected ? (
          <div className="h2 text-center">Your address: {userAddress}</div>
        ) : (
          <div>No Wallet Connected</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
