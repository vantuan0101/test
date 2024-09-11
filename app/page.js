"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/" rel="noopener noreferrer">
          <Image
            src="/bypay.svg"
            alt="ByPay Logo"
            // className={styles.vercelLogo}
            width={98}
            height={43}
            priority
          />
        </a>
        <div className={styles.btnCS}>Coming Soon</div>
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.line1}>Introducing The New PaaS</h2>
          <p className={styles.line2}>
            An all-in-one platform offering ByAtlas (Cloud infrastructure),
            ByNews (Blogging), ByTrade (Trading bot), and much more.
          </p>
          <div className={(styles.line3, styles.formGroup)}>
            <input
              className={styles.formField}
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
            />
            <span>Get early access</span>
          </div>
          <p className={styles.line4}>
            No credit card required, cancel any time
          </p>
        </div>
        <div className={styles.right}></div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://x.com/ByTrade_Crypto"
          target="_blank"
          className={styles.link}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/bypay-corporation"
          target="_blank"
          className={styles.link}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bypay-corporation"
          target="_blank"
          className={styles.link}
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
