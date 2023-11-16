import errorIcon from '../../images/error-icon.svg';
import exitIcon from '../../images/exit-icon.svg'

export default function ErrorPopup({ setErrorPopupState }) {
  function toggleErrorPopupState() {
    setErrorPopupState(false)
  }

  return (
    <div className="error-popup">
      <img className='error-popup__exit-icon' src={exitIcon} onClick={toggleErrorPopupState} alt="Botão de fechar o pop-up" />
      <img className="error-popup__icon" src={errorIcon} alt="Um X representando o erro na solicitação do usuário" />
      <p className="error-popup__text">Não foi possível encontrar a cidade buscada</p>
    </div>
  )
}