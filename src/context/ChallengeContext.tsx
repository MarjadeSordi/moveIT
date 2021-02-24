
import { createContext , useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'eye' | 'body';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengeComplited: number;
    activeChallenge: Challenge;
    experienceNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider( {children}: ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeComplited, setChallengeComplited] = useState(0);

    const [activeChallenge, setactiveChallenge] = useState (null);

    const experienceNextLevel = Math.pow((level + 1)*4, 2)

    function levelUp() {
    setLevel(level + 1);
    }

    function startNewChallenge(){
        const newChalleng = Math.floor (Math.random() * challenges.length )
        const challenge = challenges[newChalleng];

        setactiveChallenge(challenge)
    }
    
    function resetChallenge(){
        setactiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider value={{
        level, 
        currentExperience, 
        challengeComplited, 
        activeChallenge,
        experienceNextLevel,
        startNewChallenge,
        resetChallenge,
        levelUp}
        }
        >

        {children}

        </ChallengeContext.Provider>

    );
}