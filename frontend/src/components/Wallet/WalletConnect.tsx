'use client';

import React, { useState, useEffect } from 'react';
import { connectWallet, checkConnection, getUserPublicKey } from '@/lib/stellar';
import Button from '../Button/Button';
import styles from './Wallet.module.css';

const WalletConnect = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      if (await checkConnection()) {
        const pubKey = await getUserPublicKey();
        if (pubKey) setAddress(pubKey);
      }
    };
    init();
  }, []);

  const handleConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const addr = await connectWallet();
      setAddress(addr);
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  if (address) {
    return (
      <div className={styles.container}>
        <span className={styles.address}>
          {address.slice(0, 4)}...{address.slice(-4)}
        </span>
        <Button variant="outline" onClick={() => setAddress(null)}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {error && <span className={styles.error}>{error}</span>}
      <Button onClick={handleConnect} isLoading={loading}>
        Connect Wallet
      </Button>
    </div>
  );
};

export default WalletConnect;
