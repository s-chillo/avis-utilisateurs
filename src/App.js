import './App.css';
import React from 'react';
import { ref } from 'yup';

function App() {
  const [avis, setAvis] = React.useState();
  const [typeAvis, setTypeAvis] = React.useState();
  const refAvis  = React.useRef(null);

  const handleAvis = () => {
    const {current: {value}} = refAvis;
    setAvis(value);
    if(value.includes('bien')) {
      setTypeAvis('positif');
    } else{
      setTypeAvis('negatif');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='form-group'>
          <input ref={refAvis} className='avis' name ="avis" placeholder='Merci de laisser votre avis'/>
          <button type='button' onClick={handleAvis}>Enregistrer</button>
        </div>
        {
          avis && typeAvis === 'positif' && (<p className='success'> Merci à nous motive à rester meilleur</p>)
        }
        {
          avis && typeAvis === 'negatif' && (<p className='error'> C'est noté nous allons nous amméliorer</p>)
        }
      </header>
    </div>
  );
}

export default App;
