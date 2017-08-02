import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(story => (
    <div style={{width: 200}}>
      {story()}
    </div>
  ))
  .add('default', () => (
    <Button />
  ))
  .add('primary', () => (
    <Button
      display="fullwidth"
      icon="shopping-cart"
      text="Fullwidth"
    />
  ))
  .add('secondary', () => (
    <Button
      display="content"
      icon="shopping-cart"
      text="Content"
      isSecondary
    />
  ));
