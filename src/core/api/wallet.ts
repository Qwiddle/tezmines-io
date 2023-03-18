import { AccountInfo } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { config } from '../config';

export const requestBeacon = (): BeaconWallet => new BeaconWallet(config.application);
export const requestTezosToolkit = (): TezosToolkit => new TezosToolkit(config.network.rpcUrl);

export const requestPermissions = async (
  beacon: BeaconWallet,
  toolkit: TezosToolkit,
): Promise<AccountInfo | undefined> => {
  console.log('hi');
  await beacon.requestPermissions({
    network: {
      type: config.network.type,
    },
  });

  toolkit.setWalletProvider(beacon);
  return beacon.client.getActiveAccount();
};

export const clearActiveAccount = async (beacon: BeaconWallet): Promise<boolean> => {
  await beacon.clearActiveAccount();
  return typeof beacon.client.getActiveAccount() === 'undefined';
};
