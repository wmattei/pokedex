import * as React from 'react';
import App from './src';
import StoryBookUI from './storybook';

const STORY_BOOK_ENABLED = process.env.EXPO_STORYBOOK;

const AppContainer = () =>
  __DEV__ && STORY_BOOK_ENABLED ? <StoryBookUI /> : <App />;

export default AppContainer;
