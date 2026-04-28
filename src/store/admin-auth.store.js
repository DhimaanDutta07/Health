import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminAuthStore = create(
    persist(
        (set) => ({
            // Admin State
            isAdminLoggedIn: false,
            adminUser: null,
            accessToken: null,
            refreshToken: null,

            // Main Admin Login Action
            adminLogin: (userData, sessionData) => {
                set({
                    isAdminLoggedIn: true,
                    adminUser: userData,
                    accessToken: sessionData?.access_token || null,
                    refreshToken: sessionData?.refresh_token || null,
                });
            },

            // Logout
            adminLogout: () => {
                set({
                    isAdminLoggedIn: false,
                    adminUser: null,
                    accessToken: null,
                    refreshToken: null,
                });
            },

            // Helper functions
            setAdminUser: (userData) => set({ adminUser: userData }),
            setAccessToken: (token) => set({ accessToken: token }),
        }),

        {
            name: 'admin-auth-storage',
            partialize: (state) => ({
                isAdminLoggedIn: state.isAdminLoggedIn,
                adminUser: state.adminUser,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }),
        }
    )
);

export default useAdminAuthStore;