import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts'
import SinglePostReducer from './reducer_single_post'
import OrdersReducer from './reducer_orders'
import CategoriesReducer from './reducer_categories'
import LoadReducer from './reducer_load'

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostsReducer,
  order: OrdersReducer,
  categories: CategoriesReducer,
  load: LoadReducer,
  post: SinglePostReducer,
});

export default rootReducer;