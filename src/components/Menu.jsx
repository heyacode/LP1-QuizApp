import { StyledMenu } from '../styles/Menu.styled';
import { getQuestions } from '../redux/Store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import logo from '../styles/images/logo.PNG';

const Menu = () => {
  const dispatch = useDispatch();

  const [nbquestions, setNbQuestions] = useState(5);
  const [categorie, setCategorie] = useState(18);
  const [difficulte, setdifficulte] = useState('easy');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${nbquestions}&category=${categorie}&difficulty=${difficulte}&type=multiple`;
    dispatch(getQuestions(url));
  };

  const onChangeHandlerNbQuestions = (e) => {
    setNbQuestions(e.target.value);
  };

  const onChangeHandlerCategorie = (e) => {
    setCategorie(e.target.value);
  };

  const onChangeHandlerDifficulte = (e) => {
    setdifficulte(e.target.value);
  };
  return (
    <StyledMenu>
      <form onSubmit={onSubmitHandler}>
        <img src={logo} alt="logo" />
        <div className='nbq'>
          <label>Nombre Des Questions:  </label>
          <select onChange={onChangeHandlerNbQuestions}>
            <option value='5'>5</option>
            <option value='10'>10</option>
          </select>
        </div>

        <div>
          <label>Catégories : </label>
          <select onChange={onChangeHandlerCategorie}>
            <option value='18'>IT</option>
            <option value='15'>Jeux vidéo</option>
          </select>
        </div>

        <div>
          <label>Difficulté : </label>
          <select onChange={onChangeHandlerDifficulte}>
            <option value='easy'>Facile</option>
            <option value='medium'>Moyen</option>
            <option value='hard'>Difficile</option>
          </select>
        </div>

        <button type='submit'>Commencer Le Quiz</button>
      </form>
    </StyledMenu>
  );
};

export default Menu;
