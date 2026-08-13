import { create } from 'zustand';

interface State {
  hasStarted: boolean;
  activeElementId: string | null;
  isMuted: boolean;
  activeGame: string | null;
  gameOutcomes: Record<string, 'win' | 'lose'>;
  start: () => void;
  reset: () => void;
  setActiveElement: (id: string) => void;
  setMuted: (muted: boolean) => void;
  setActiveGame: (gameId: string | null) => void;
  setGameOutcome: (gameId: string, outcome: 'win' | 'lose') => void;
}

export const useStore = create<State>((set) => ({
  hasStarted: false,
  activeElementId: null,
  isMuted: false,
  activeGame: null,
  gameOutcomes: {},
  start: () => set({ hasStarted: true, activeElementId: 'intro' }),
  reset: () => set({ hasStarted: false, activeElementId: null, activeGame: null, gameOutcomes: {} }),
  setActiveElement: (id) => set({ activeElementId: id }),
  setMuted: (muted) => set({ isMuted: muted }),
  setActiveGame: (gameId) => set({ activeGame: gameId }),
  setGameOutcome: (gameId, outcome) => set((state) => ({ 
      gameOutcomes: { ...state.gameOutcomes, [gameId]: outcome },
      activeGame: null
  })),
}));