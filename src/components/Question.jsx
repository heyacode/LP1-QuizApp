import { StyledQuestion } from '../styles/Question.styled';
import { useSelector, useDispatch } from 'react-redux';
import { questionsuivante, verifierreponse } from '../redux/Store';

const Question = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const index = useSelector((state) => state.index);
  const correcte = useSelector((state) => state.correcte);
  const question = questions[index];

  const liste = [question.correct_answer,...question.incorrect_answers,];
  const onHandlerQuestuinSuivante = () => {
    dispatch(questionsuivante());
  };

  const onReponseCorrecte = (reponse) => {
    dispatch(verifierreponse(reponse));
    dispatch(questionsuivante());
  };

  const question_aleatoire = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  question_aleatoire(liste);

  return (
    <StyledQuestion>
      <p>
        Les réponses correctes : {correcte}
      </p>
      <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
      {liste.map((question, index) => (
        <button
          key={index}
          className='reponse'
          onClick={() => onReponseCorrecte(question)}
          dangerouslySetInnerHTML={{ __html: question }}
        ></button>
      ))}

      <button className='suivant' onClick={onHandlerQuestuinSuivante}>
        Valider
      </button>
    </StyledQuestion>
  );
};

export default Question;
