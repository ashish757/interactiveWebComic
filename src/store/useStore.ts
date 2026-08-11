import { create } from 'zustand';

interface State {
  hasStarted: boolean;
  activeElementId: string | null;
  isMuted: boolean;
  start: () => void;
  reset: () => void;
  setActiveElement: (id: string) => void;
  setMuted: (muted: boolean) => void;
}

export const useStore = create<State>((set) => ({
  hasStarted: false,
  activeElementId: null,
  isMuted: false,
  start: () => set({ hasStarted: true, activeElementId: 'intro' }),
  reset: () => set({ hasStarted: false, activeElementId: null }),
  setActiveElement: (id) => set({ activeElementId: id }),
  setMuted: (muted) => set({ isMuted: muted }),
}));