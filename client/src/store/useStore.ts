import { create } from 'zustand';

interface State {
  hasStarted: boolean;
  currentPanel: number;
  start: () => void;
  nextPanel: () => void;
  reset: () => void;
}

export const useStore = create<State>((set) => ({
  hasStarted: false,
  currentPanel: 1,
  start: () => set({ hasStarted: true, currentPanel: 1 }),
  nextPanel: () => set((state) => ({ currentPanel: state.currentPanel + 1 })),
  reset: () => set({ hasStarted: false, currentPanel: 1 }),
}));