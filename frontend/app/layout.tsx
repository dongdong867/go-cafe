//font
import { Montserrat } from "next/font/google";

//css
import "./global.css";

//components
import Navbar from "./components/Navbar/Navbar";
import { ApolloWrapper } from "../lib/apollo-provider";
import { Suspense } from "react";
import LayoutLoading from "./components/Loading/LayoutLoading";

export const metadata = {
  title: "Go Cafe",
  description: "Go an find your dream caf\u00e9!",
  manifest: "./manifest.json",
  icons: {
    icon: "https://storage.googleapis.com/gocafe-tw.appspot.com/icon-x512.png",
    apple: "https://storage.googleapis.com/gocafe-tw.appspot.com/icon-x512.png",
  },
};

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  display: "swap",
  preload: false,
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="cupcake" className={`${montserrat.variable}`}>
      <body>
        <ApolloWrapper>
          <Suspense fallback={<LayoutLoading />}>
            <Navbar />
            {children}
          </Suspense>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
