import '../styles/global.css';
import { useState } from 'react';

import {ChallengeContext, ChallengeProvider} from '../context/ChallengeContext';

function MyApp({ Component, pageProps }) {



  return( 
    <ChallengeProvider>
    <Component {...pageProps} /> 
    </ChallengeProvider>
  )
}

export default MyApp
