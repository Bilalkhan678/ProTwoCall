import "./globals.scss";
import "../styles/sidebar.scss";

import { projectName } from "theme/theme-config";
import { Poppins } from "next/font/google";
import axios from "axios";
import Providers from "components/Providers/Providers";

const fonts = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={fonts.className} suppressHydrationWarning>
      <head>
        <title>{projectName}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="NextJs web app" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
