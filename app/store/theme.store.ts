import { create } from "zustand";

// Define the shape of your state
type UIState = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
};

// Create the store
export const useUIState = create<UIState>((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
