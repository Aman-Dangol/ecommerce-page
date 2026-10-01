// store/useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  hydrated: boolean;
  token?: string;
  setToken: (token: string) => void;
  removeData: () => void;
  setHydrated: () => void;
}

export const useAuthstore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      hydrated: false,
      setToken: (data) => {
        if (data)
          set(() => ({
            token: data,
            isAuthenticated: true,
          }));
      },
      removeData() {
        set(() => ({ token: undefined, isAuthenticated: false }));
      },
      setHydrated: () => set({ hydrated: true }),
    }),

    {
      name: "user",
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) console.error("Auth store rehydration failed:", error);
        state?.setHydrated();
      },
    },
  ),
);
