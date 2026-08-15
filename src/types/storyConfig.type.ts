export type TimelinePhase = [number, number] | number;

export type AnimationType = 'bottom' | 'top' | 'left' | 'right' | 'fade' | 'pop' | 'none';

export type TimelineConfig = {
    enter?: TimelinePhase;
    stay?: TimelinePhase;
    exit?: TimelinePhase;
};

export type StoryElement = {
    id: string;
    type: string;
    layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string; width?: string; height?: string };
    timeline?: TimelineConfig;
    enterFrom?: AnimationType;
    exitTo?: AnimationType;
    animation?: 'pulse' | 'rocking' | 'scale-up-scale-down' | 'none';
    glow?: boolean;
    assetKey?: string;
    volume?: number;
    className?: string;
    classNameImg?: string;

    text?: string;
    speaker?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' ;
    tailPosition?: "bottom-left" | "bottom-right" | 'left' | 'right';

    gameTarget?: string;
};

export type BranchCondition = {
    game: string;
    outcome: 'win' | 'lose';
};

export type Scene = {
    sceneId: number;
    duration: number;
    baseBackground: string;
    elements: StoryElement[];
    isMinigame?: string;
    minigameBackground?: string;
    branch?: BranchCondition;
};


