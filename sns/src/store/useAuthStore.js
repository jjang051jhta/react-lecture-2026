import { create } from "zustand";

const useAuthStore = create((set) => ({
  //상태
  accessToken: localStorage.getItem("accessToken"),
  login: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    set({
      accessToken: accessToken,
    });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: null });
  },
}));
export default useAuthStore;
