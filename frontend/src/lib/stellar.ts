import { 
  isConnected, 
  signTransaction,
  requestAccess,
  getAddress
} from "@stellar/freighter-api";

/**
 * Utility to check if Freighter is installed and connected
 */
export const checkConnection = async () => {
  return await isConnected();
};

/**
 * Request access to the user's Freighter account
 */
export const connectWallet = async () => {
  const result = await requestAccess();
  if (typeof result === 'string') return result;
  return result.address;
};

/**
 * Get the current public key from Freighter
 */
export const getUserPublicKey = async () => {
  const result = await getAddress();
  if (typeof result === 'string') return result;
  return result.address;
};

/**
 * Sign a transaction using Freighter
 */
export const signWithFreighter = async (xdr: string, network: 'PUBLIC' | 'TESTNET' = 'TESTNET') => {
  const networkPassphrase = network === 'PUBLIC' 
    ? 'Public Global Stellar Network ; October 2015' 
    : 'Test SDF Network ; September 2015';
    
  return await signTransaction(xdr, {
    networkPassphrase,
  });
};
