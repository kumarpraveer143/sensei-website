import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/Logo.svg?url";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { ToastContainer } from "react-toastify";
import StoreProvider from "@/Redux/Provider";
import { GoogleTagManager, GoogleTagManagerNoScript, MetaPixel, GTag } from "@/components/Analytics";

export const metadata = {
  // metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  title: {
    default:
      "Life skills that empower your child in this digital world mentally, emotionally, ethically",
    template: "%s | Sensei",
  },

  description:
    "Life Skill and Education | Mental Wellness | Self and Social Awareness | Moral Guidance and Ethics",
  twitter: {
    card: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en scrollbar-hide">
        {/* <GoogleTagManager gtmId={process.env.GTM_ID} /> */}
        <GTag gtagId={process.env.GTAG_ID} />
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <MetaPixel pixelId={process.env.META_PIXEL_ID} />
        <body
          className={
            "scrollbar-hide flex min-h-screen flex-col justify-between"
          }
        >
          <GoogleTagManagerNoScript gtmId={process.env.GTM_ID} />
          {/* <GoogleAnalytics gaId={process.env.GA_ID} /> */}
          <StoreProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
