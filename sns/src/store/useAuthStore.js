import { create } from "zustand";

//js
const useAuthStore = create((set) => ({
  //상태
  accessToken: localStorage.getItem("accessToken"),
  member: null,
  setMember: (member) => {
    set({ member: member });
  },
  login: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    set({
      accessToken: accessToken,
    });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: null, member: null });
  },
}));
export default useAuthStore;
