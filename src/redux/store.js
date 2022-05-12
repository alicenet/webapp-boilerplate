import { configureStore } from '@reduxjs/toolkit';
import { aliceNetAdapter } from 'adapters/alicenetadapter';
import { appSliceReducer, aliceNetAdapterReducer, aliceNetWalletReducer } from './reducers';

const store = configureStore({
    reducer: {
        app: appSliceReducer,
        aliceNetAdapter: aliceNetAdapterReducer,
        aliceNetWallet: aliceNetWalletReducer
    },
})

// Set the state equalizer to the aliceNetAdapter instance
aliceNetAdapter.setEqualizerFunction(() => store.dispatch({ type: "aliceNetAdapter/equalize" }));

export default store;