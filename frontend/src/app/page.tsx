'use client';

import React from 'react';
import styles from './page.module.css';
import WalletConnect from '@/components/Wallet/WalletConnect';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';
import { Wallet, Shield, Zap, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Zap size={32} color="var(--primary)" />
          <h1>LumenLogic</h1>
        </div>
        <WalletConnect />
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Yield Aggregation & Escrow for Stellar</h2>
          <p>Optimize your assets and secure your transactions with Soroban smart contracts.</p>
        </section>

        <div className={styles.grid}>
          <Card 
            title="Yield Router" 
            footer={<Button variant="primary">Deposit Assets</Button>}
          >
            <div className={styles.cardContent}>
              <TrendingUp size={48} className={styles.icon} />
              <p>Maximize returns across multiple lending protocols automatically.</p>
              <div className={styles.stats}>
                <span>Current APY:</span>
                <span className={styles.highlight}>~8.5%</span>
              </div>
            </div>
          </Card>

          <Card 
            title="Escrow Service" 
            footer={<Button variant="secondary">Create Escrow</Button>}
          >
            <div className={styles.cardContent}>
              <Shield size={48} className={styles.icon} />
              <p>Safe, decentralized escrow for peer-to-peer asset exchange.</p>
              <div className={styles.stats}>
                <span>Active Escrows:</span>
                <span className={styles.highlight}>0</span>
              </div>
            </div>
          </Card>

          <Card 
            title="Your Wallet" 
            footer={<Button variant="outline">View Transactions</Button>}
          >
            <div className={styles.cardContent}>
              <Wallet size={48} className={styles.icon} />
              <p>Manage your XLM and other tokens directly from the dashboard.</p>
              <div className={styles.stats}>
                <span>Balance:</span>
                <span className={styles.highlight}>-- XLM</span>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 LumenLogic. Powered by Soroban.</p>
      </footer>
    </div>
  );
}
