// store/useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  token?: string;
  setToken: (token: string) => void;
  removeData: () => void;
}

export const useAuthstore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userInfo: undefined,
      setToken: (data) => {
        if (data)
          set(() => ({
            token: data,
            isAuthenticated: true,
          }));
      },
      removeData() {
        set(() => ({ userInfo: undefined, isAuthenticated: false }));
      },
    }),

    {
      name: "user",
    },
  ),
);
