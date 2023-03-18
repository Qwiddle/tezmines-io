import { NetworkType } from '@airgap/beacon-sdk';
import { Network } from './types';

interface ApplicationConstants {
  applicationName: string,
  applicationIconUrl: string,
  preferredNetwork: Network,
  preferredRpc: string,
}

const constants: ApplicationConstants = {
  applicationName: 'TezMines',
  applicationIconUrl: 'https://tezostaquito.io/img/favicon.svg',
  preferredNetwork: NetworkType.GHOSTNET,
  preferredRpc: 'https://mainnet.api.tez.ie',
};

export default constants;
