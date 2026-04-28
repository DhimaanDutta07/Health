import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set, get) => ({
            // State
            isLoggedIn: false,
            user: null,
            accessToken: null,
            refreshToken: null,

            // Actions
            login: (userData, sessionData) => {
                set({
                    isLoggedIn: true,
                    user: userData,
                    accessToken: sessionData?.access_token || null,
                    refreshToken: sessionData?.refresh_token || null,
                });
            },

            setUser: (userData) => {                   
                set((state) => ({
                    user: { ...state.user, ...userData }
                }));
            },

            logout: () => {
                set({
                    isLoggedIn: false,
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                });
            },

            resetAuth: () => set({
                isLoggedIn: false,
                user: null,
                accessToken: null,
                refreshToken: null,
            })
        }),

        {
            name: 'insurewell-client-auth-storage',
            partialize: (state) => ({
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                accessToken: state.accessToken,
            }),
        }
    )
);

export default useAuthStore;