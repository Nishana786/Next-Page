import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import HeroSection from "../Component/HeroSection";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Component {...pageProps} />

        <Footer />
      </Provider>
    </>
  );
}
