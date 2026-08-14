import { create } from "zustand";

const useMovieStore = create((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword: keyword }),
}));
export default useMovieStore;
