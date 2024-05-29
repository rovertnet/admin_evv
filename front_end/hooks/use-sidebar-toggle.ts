import { create } from 'zustand';

interface sidebartoggle{
  toggleCollaps:  boolean,
  invokToggleCollaps: ()  =>  void
}

export const useSidebarToggle = create<sidebartoggle>((set, get) => ({
  toggleCollaps: false,
  invokToggleCollaps: () => set({ toggleCollaps: !get().toggleCollaps }),
}));