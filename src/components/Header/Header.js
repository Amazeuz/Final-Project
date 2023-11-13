export default function Header({ setAboutPopupState }) {

  function toggleAboutPopupState() {
    setAboutPopupState(true)
  }

  return (
    <div className="header">
      <button className="header__about-button" onClick={toggleAboutPopupState}>Sobre o autor</button>
    </div>
  )
}