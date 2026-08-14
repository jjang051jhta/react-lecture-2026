import { create } from "zustand";

const useMovieStore = create((set) => ({
  keyword: "",
  page: 1,
  setKeyword: (keyword) => set({ keyword: keyword }),
  setPage: (page) => set({ page }),
  nextPage: () => {
    set((state) => ({ page: state.page + 1 }));
  },
  resetPage: () => {
    set({
      page: 1,
    });
  },
}));
export default useMovieStore;
