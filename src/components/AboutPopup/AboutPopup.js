import AuthorImage from '../../images/author-image.jpg';
import exitIcon from '../../images/exit-icon.svg';

export default function AboutPopup({ setAboutPopupState }) {

  function toggleAboutPopupState() {
    setAboutPopupState(false)
  }

  return (
    <div className="about-popup">
      <img className='about-popup__exit-icon' src={exitIcon} onClick={toggleAboutPopupState} alt="Botão de fechar o pop-up" />
      <p className='about-popup__text'>
        Olá, me chamo Diuri, tenho 21 anos, e sou um aspirante a programador.
        Sempre gostei muito de coisas que envolvam lógicas complexas,
        sempre me dei bem com matemática na escola, e sinto que programação
        é muito semelhante á matemática em alguns aspectos, como por exemplo, a sensação de
        corrigir um bug em um programa é muito parecida com resolvar uma conta complexa
        em matemática, e por isso, e diversos outros pontos, pretendo seguir
        minha vida trabalhando nessa área.
      </p>
      <img className='about-popup__author-image' src={AuthorImage} alt="Imagem do autor do site" />
    </div>
  )
}