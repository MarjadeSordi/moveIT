import { CompiletedChallenge } from "../components/CompiletedChallenge";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { Challengebox } from "../components/Challengebox";

export default function Home() {
  return ( 
    <div className={styles.container}>
      <Head>
        <title> NLW - MoveIT </title>
      </Head>
      
      <ExperienceBar />
      <section>
      <div>
        <Profile />
        <CompiletedChallenge />
        <Countdown />
      </div>
    <div>
        <Challengebox />
    </div>
    </section>

  </div>
   
  )
}
