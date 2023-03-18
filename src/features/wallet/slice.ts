import { AccountInfo, Network } from '@airgap/beacon-sdk';
import {
  ActionReducerMapBuilder, PayloadAction, createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import { TezosToolkit } from '@taquito/taquito';
import { requestBeacon, requestPermissions, requestTezosToolkit } from '../../core/api/wallet';
import type { RootState } from '../../store/store';

interface WalletState {
  connected: boolean;
  account?: AccountInfo;
  taquito?: TezosToolkit;
  network?: Network;
  rpcUrl?: string;
}

const initialState: WalletState = {
  connected: false,
};

export const connectWallet = createAsyncThunk(
  'wallet/connect',
  async (any, { rejectWithValue }) => {
    console.error('hi');
    try {
      console.log('hi');
      const beacon = requestBeacon();
      const toolkit = requestTezosToolkit();
      const account = await requestPermissions(beacon, toolkit);
      return { account, beacon, toolkit };
    } catch (err) {
      return rejectWithValue({
        message: err,
      });
    }
  },
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setAccount: (state: any, action: PayloadAction<AccountInfo>) => {
      state.connected = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder
      .addCase(connectWallet.fulfilled, (state, action) => {
        console.log(action.payload);
        const { account, beacon, toolkit } = action.payload;
        state.connected = true;
        state.account = account;
        state.beacon = beacon;
        state.taquito = toolkit;
      });
  },
});

export const setConnection = walletSlice.actions;

export const getUserAccount = (state: RootState) => state.wallet.account;
export const getConnected = (state: RootState) => state.wallet.connected;

export default walletSlice.reducer;
