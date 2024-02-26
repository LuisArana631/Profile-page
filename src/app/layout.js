"use client";

import Layout from '@/components/Layout';
import HeadComponent from '@/components/Head';
import PropTypes from 'prop-types';
import "@/styles/themes.css"
import "@/styles/global.css"
import { useEffect } from 'react';

export default function RootLayout ({ children }) {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme', 
        localStorage.getItem('theme')
      )
    }
  }, [])

  return (
    <Layout>
      <HeadComponent title="Luis Arana's Portfolio" />
      {children}
    </Layout>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}