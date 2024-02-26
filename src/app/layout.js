"use client";

import Layout from "@/components/Layout";
import HeadComponent from "@/components/Head";
import PropTypes from "prop-types";
import "@/styles/themes.css";
import "@/styles/global.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent title="Luis Arana's Portfolio" />
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
