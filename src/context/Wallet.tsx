import { BeaconWallet } from '@taquito/beacon-wallet';
import constate from 'constate';
import { useState } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { useNetwork } from './Settings';
import { NetworkConfig } from '../core/types';
import { config } from '../core/config';

type WalletState = {
  walletAddress: string,
  wallet: string,
  connected: boolean,
};

export const MakeBeacon = () => {
  const network: NetworkConfig = useNetwork();
  const Tezos: TezosToolkit = new TezosToolkit(network.type);

  const [beaconState, setBeaconState] = useState((): {
    beacon: undefined | BeaconWallet,
    walletAddress?: string;
    wallet?: string;
  } => ({
    beacon: new BeaconWallet(config.application),
    walletAddress: undefined,
    wallet: undefined,
  }));
};

export const [
  WalletProvider,
  useWalletAddress,
] = constate(
  MakeBeacon,
);
