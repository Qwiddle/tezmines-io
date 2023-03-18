import { NetworkType } from '@airgap/beacon-sdk';

export type Network = NetworkType.MAINNET | NetworkType.GHOSTNET;
export type NetworkConfig = {
  type: Network,
  rpcUrl: string,
};
