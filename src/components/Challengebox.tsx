import { useContext } from 'react';
import { ChallengeContext, ChallengeProvider } from '../context/ChallengeContext';
import styles from '../styles/components/Challengebox.module.css';



export function Challengebox(){
    const {activeChallenge, resetChallenge} = useContext(ChallengeContext);

    return(
        <div className={styles.ChallengeboxContainer}>

            { activeChallenge ? 

            <div className={styles.challengeActive}> 
            <header> Ganhe {activeChallenge.amount} </header>
            <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt='Ganhe Pontos' />
                <strong> Novo desafio </strong>
                <p> {activeChallenge.description} </p>
            </main>
                <footer>
                    <button
                    type='button' 
                    className ={styles.challengeButtonFailed}
                    onClick={resetChallenge}> 
                    Falhei :( </button>
                    <button
                    type='button' 
                    className ={styles.challengeButtonWin}> 
                    Completei :) </button>
                </footer>
            </div>
            
            :            
            <div className={styles.challengeNotActive}>
                <strong> Finalize um ciclo para receber um desafio </strong>   
                <p> 
                 <img src='icons/level-up.svg' alt='Level Up' />
                 Avance de level completando os desafios 
                 </p>

            </div> 
            }


        </div>
    )
};