import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  menu: true,
  quiz: false,
  resultat: false,
  loading: false,
  erreur: false,
  correcte: 0,
  index: 0,
  url: `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`,
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = [...action.payload];

      if (state.questions !== 0) {
        state.loading = false;
        state.quiz = true;
      }
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },

    setresultat(state, action) {
      state.resultat = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setErreur(state, action) {
      state.erreur = action.payload;
    },
    questionsuivante(state) {
      if (state.index + 1 >= state.questions.length) {
        state.resultat = true;

        return;
      }
      state.index++;
    },
    reinitialiser: () => initialState,
    verifierreponse(state, action) {
      const reponsecorrecte = state.questions[state.index].correct_answer;
      const reponseutilisateur = action.payload;

      if (reponsecorrecte === reponseutilisateur) state.correcte++;
    },
  },
});

const store = configureStore({
  reducer: quizSlice.reducer,
});

export const {
  setQuestions,
  setMenu,
  setresultat,
  questionsuivante,
  setLoading,
  setErreur,
  reinitialiser,
  verifierreponse,
} = quizSlice.actions;
export default store;

export const getQuestions = (url) => async (dispatch) => {
  dispatch(setMenu(false));
  dispatch(setLoading(true));
  const response = await axios(url).catch((err) => {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      dispatch(setErreur({ status: true, msg: err.response }));
    } else if (err.request) {
      console.log(err.request);
      dispatch(setErreur({ status: true, msg: err.response }));
    } else {
      console.log('erreur', err.message);
      dispatch(setErreur({ status: true, msg: err.response }));
    }
  });
  if (response.data.response_code !== 0) {
    console.log('donnees non trouvees' + response.data.response_code);
    dispatch(setErreur({ status: true, msg: "donnees non chargees" }));
    return;
  }
  dispatch(setQuestions(response.data.results));
};
