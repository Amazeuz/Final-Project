import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Header({ setAboutPopupState }) {
  const [isApiPage, setApiPage] = useState(false);
  const history = useHistory()


  function toggleAboutPopupState() {
    setAboutPopupState(true)
  }

  function redirectToApi() {
    history.push('/api')
    setApiPage(true)
  }

  function redirectToMain() {
    history.push('/')
    setApiPage(false)
  }

  return (
    <div className="header">
      <button className="header__about-button" onClick={toggleAboutPopupState}>Sobre o autor</button>
      <button className="header__about-button" onClick={isApiPage ? redirectToMain : redirectToApi}>
        {isApiPage ? 'Voltar á página inicial' : 'Visualizar dados da API'}
      </button>
    </div>
  )
}