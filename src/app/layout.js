import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import logo from "@/assets/Logo.svg?url";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StoreProvider from "@/Redux/Provider";
import { GoogleTagManager, GoogleTagManagerNoScript, GTag } from "@/components/Analytics";
// import { Nunito } from "next/font/google";

// const nunito = Nunito({
//   subsets: ['latin'],
//   weight: ['400', '700', '900'],
//   display: 'swap',
//   variable: '--font-nunito',
// });

export const metadata = {
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
    <html lang="en" className="scroll-smooth md:scroll-auto">
      <body className="flex min-h-screen flex-col gap-15 justify-between">
        {/* Tracking Scripts */}
        <GTag gtagId={process.env.GTAG_ID} />
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        {/* <MetaPixel pixelId={process.env.META_PIXEL_ID} /> */}
        <GoogleTagManagerNoScript gtmId={process.env.GTM_ID} />

        {/* App Content */}
        <StoreProvider>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

