import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar(){
    const { currentExperience, experienceNextLevel } = useContext(ChallengeContext);

    const percentToNextLevel = Math.round(( currentExperience * 100)) / experienceNextLevel

    return(
        <header className={styles.experienceBar}>
            <span>
                0 xp
            </span>
            <div>
            <div style={{width:`${percentToNextLevel}`}} />
            <span className={styles.currentExperience} style={{ left :`${percentToNextLevel}`}}>
            {currentExperience} Xp
            </span>
            </div>
            <span>
            {experienceNextLevel} Xp
            </span>
        </header>
    );
}