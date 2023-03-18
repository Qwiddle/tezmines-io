import { DAppClientOptions } from '@airgap/beacon-sdk';
import { useState } from 'react';
import constate from 'constate';
import { NetworkConfig } from '../core/types';
import { config } from '../core/config';

export interface SettingsState {
  network: NetworkConfig;
}

export const [
  SettingsProvider,
  useNetwork,
] = constate(
  () => {
    const [settings, setSettings] = useState<SettingsState>({
      network: config.network,
    });

    const setNetwork = (network: NetworkConfig) => (
      setSettings((s) => ({ ...s, network }))
    );

    return { settings, setters: { setNetwork } };
  },
  (value) => value.settings.network,
  (value) => value.setters.setNetwork,
);
