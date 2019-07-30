import { call, put, takeEvery } from 'redux-saga/effects'
import {
    getTodosSuccesfull,
    getTodosFailure,
} from '../actions/todos';

function* fetchTodos(action) {
   try {
      const todos = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
      const todosJson = yield call([todos, 'json']);
      const todosFinal = todosJson.map(({completed, title}) => ({
        completed,
        description: title,
      }));
      yield put(getTodosSuccesfull(todosFinal));
   } catch (e) {
      yield put(getTodosFailure(e.message));
   }
}

export default function* defaultSaga() {
  yield takeEvery('TODOS_REQUEST', fetchTodos);
}