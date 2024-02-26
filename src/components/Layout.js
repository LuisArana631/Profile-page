"use client";

import Bottombar from "@/components/Bottombar";
import Explorer from "@/components/Explorer";
import Sidebar from "@/components/Sidebar";
import Tabsbar from "@/components/Tabsbar";
import Titlebar from "@/components/Titlebar";
import PropTypes from 'prop-types';
import styles from "@/styles/Layout.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const main = document.getElementById('main-editor');
    main.scrollTop = 0;
  }, [router.pathname])

  return (
    <html lang="en">
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}