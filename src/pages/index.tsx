import * as React from "react";
import LoginWithGoogle from "../../firebase/loginGoogle";
import Typewriter from 'typewriter-effect';

const IndexPage = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5',   paddingLeft: '30px', 
    paddingRight: '30px' }}>
      <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#0077b6', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8em' }}>Public Beta</div>
      <h1 style={{ textAlign: 'center', fontSize: '3em', fontWeight: 'bold' }}>ChatterAi</h1>
      <h2 style={{ marginTop: '-2rem', textAlign: 'center', fontSize: '1.5em', fontWeight:150 }}>Your personal finance assistant</h2>
      <div style={{ display: 'flex', marginTop: '2rem', fontSize: '1.5em', justifyContent: 'center', alignItems: 'center' }}>
        <Typewriter
          options={{
            strings: [  'What are the best ways to save for retirement?',
            'How do I start investing in the stock market?',
            'What are the differences between a 401k and an IRA?',
            'What are some good ways to improve my credit score?',
            'What are the best strategies for paying off debt?'],
            autoStart: true,
            loop: true,
            delay: 35
          }}
        />
      </div>
      <div style={{ marginTop: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginWithGoogle />
      </div>
    </div>
  )
}

export default IndexPage;
