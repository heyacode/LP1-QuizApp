import { Fragment } from 'react';
import { StyledResultat, StyledResultatOverlay } from '../styles/Resultat.styled';
import { useSelector, useDispatch } from 'react-redux';
import { reinitialiser } from '../redux/Store';

const Resultat = () => {
  const reponsecorrecte = useSelector((state) => state.correcte);
  const erreur = useSelector((state) => state.erreur);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(reinitialiser());
  };
  let MessageResultat;
  if (erreur.status) {
    MessageResultat = (
      <div>
        <h2>Erreur</h2>
        <p>{erreur.msg}</p>
        <button onClick={onClickHandler}>Try Again</button>
      </div>
    );
  } else if (reponsecorrecte >= 3) {
    MessageResultat = (
      <div>
        <h2>Congratulations</h2>
        <p>
          You have answered {reponsecorrecte} questions correctly.
        </p>
        <button onClick={onClickHandler}>Play Again</button>
      </div>
    );
  } else {
    MessageResultat = (
      <div>
        <h2>Nombre de réponses correctes insuffisant</h2>
        <p>
          Vous avez répondu à {reponsecorrecte} des questions correctement.
          Vous avez besoin de répondre correctement à au moins 3 questions.
        </p>
        <button onClick={onClickHandler}>Recommencer</button>
      </div>
    );
  }

  return (
    <Fragment>
      <StyledResultat>{MessageResultat}</StyledResultat>
      <StyledResultatOverlay />
    </Fragment>
  );
};

export default Resultat;
