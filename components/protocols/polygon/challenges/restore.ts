import {ethers} from 'ethers';

declare let window: {
  ethereum: ethers.providers.ExternalProvider;
};

const restore = (mnemonic: string, address?: string) => {
  console.log('process.env.NEXT_PUBLIC_MEMONIC', mnemonic);
  try {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);

    if (wallet.address === address) {
      const restoredAddress = wallet.address;
      return {
        restoredAddress,
      };
    } else {
      return {error: 'Unable to restore account'};
    }
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    return {error: errorMessage};
  }
};

export default restore;
