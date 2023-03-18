import { DAppClientOptions } from '@airgap/beacon-sdk';
import { NetworkConfig } from './types';
import constants from './const';

export interface TezMineConfig {
  network: NetworkConfig,
  application: DAppClientOptions,
}

const {
  preferredNetwork,
  preferredRpc,
  applicationIconUrl,
  applicationName,
} = constants;

export const config: TezMineConfig = {
  network: {
    type: preferredNetwork,
    rpcUrl: preferredRpc,
  },
  application: {
    iconUrl: applicationIconUrl,
    preferredNetwork,
    name: applicationName,
  },
};
