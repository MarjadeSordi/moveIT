import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/CompiletedChallenge.module.css';



export function CompiletedChallenge(){
    const { challengeComplited } = useContext(ChallengeContext);
    return (
        <div className={styles.compiletdConteiner}>
            <span>
                Desafios Completos
            </span>

            <span>
            { challengeComplited }
            </span>
        </div>
    );
}