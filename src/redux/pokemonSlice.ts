import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  search: string;
}

const initialState: PokemonState = {
  search: ''
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    }
  }
});

export const { setSearch } = pokemonSlice.actions;
export default pokemonSlice.reducer;
