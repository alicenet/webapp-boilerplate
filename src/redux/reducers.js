import { createSlice } from '@reduxjs/toolkit'
import { classInstanceReducer } from 'redux-class-watcher';
import { aliceNetAdapter } from 'adapters/alicenetadapter';
import { aliceNetProvider } from 'config/config';

// Generic App Reducer State
const appSlice = createSlice({
    name: "app",
    initialState: {
        activePanel: false,
        settings: {
            aliceNetProvider: aliceNetProvider,
        },
        loading: false, // For global loading status
    },
    reducers: {
        setLoading: (state, action) => { // For testing redux state TODO: Remove
            state.loading = action.payload;
        },
        clearLoading: (state) => {
            state.loading = false;
        }
    },
})

// Export Generic App Actions
export const { setLoading, clearLoading } = appSlice.actions
// Export generic reducer for use in store.js
export const appSliceReducer = appSlice.reducer;

// Class instance reducers for adapter and wallet -- 
export const [aliceNetAdapterReducer, aliceNetAdapterEqualize] = classInstanceReducer(aliceNetAdapter, "aliceNetAdapter");
export const [aliceNetWalletReducer, aliceNetWalletEqualize] = classInstanceReducer(aliceNetAdapter.wallet, "aliceNetWallet");