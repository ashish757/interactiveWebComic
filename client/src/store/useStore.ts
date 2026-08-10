import { create } from 'zustand';

interface State {
  hasStarted: boolean;
  activeElementId: string | null;
  start: () => void;
  reset: () => void;
  setActiveElement: (id: string) => void;
}

export const useStore = create<State>((set) => ({
  hasStarted: false,
  activeElementId: null,
  start: () => set({ hasStarted: true, activeElementId: 'intro' }),
  reset: () => set({ hasStarted: false, activeElementId: null }),
  setActiveElement: (id) => set({ activeElementId: id }),
}));