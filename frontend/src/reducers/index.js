import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts'
import SinglePostReducer from './reducer_single_post'
import OrdersReducer from './reducer_orders'
import CategoriesReducer from './reducer_categories'
import LoadReducer from './reducer_load'
import CommentsReducer from './reducer_comments'
import NewInitValsReducer from './reducer_new_init'
import CommentNavReducer from './reducer_comment_nav'

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostsReducer,
  order: OrdersReducer,
  categories: CategoriesReducer,
  load: LoadReducer,
  post: SinglePostReducer,
  comments: CommentsReducer,
  initVals: NewInitValsReducer,
  commentNav: CommentNavReducer,
});

export default rootReducer;