import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../src/styles/Loader';
import Menu from './components/Menu';
import Resultat from './components/Resultat';
import Question from './components/Question';
import GlobalStyle from '../src/styles/GlobalStyle';

function App() {
  const showMenu = useSelector((state) => state.menu);
  const showQuiz = useSelector((state) => state.quiz);
  const showResultat = useSelector((state) => state.resultat);
  const showLoader = useSelector((state) => state.loading);
  return (
    <Fragment>
      <GlobalStyle />
      {showMenu && <Menu />}
      {showLoader && <Loader />}
      {showQuiz && <Question />}
      {showResultat && <Resultat />}
    </Fragment>
  );
}

export default App;
