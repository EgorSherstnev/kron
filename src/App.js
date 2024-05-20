import React from 'react';
import CasesList from './components/CasesList';
import 'antd/dist/reset.css'

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='cases'>
        <div className='container'>
          <h1 className="cases-list__title">Кейсы</h1>
          <CasesList />
        </div>
      </main>
    </div>
  );
}

export default App;