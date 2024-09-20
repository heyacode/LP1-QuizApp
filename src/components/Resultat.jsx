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
        <h2>Game Over</h2>
        <p>
          You have answered {reponsecorrecte} questions correctly.<br />
          You need to answer at least 3 questions correctly.
        </p>
        <button onClick={onClickHandler}>Play Again</button>
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
