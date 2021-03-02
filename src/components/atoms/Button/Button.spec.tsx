import * as React from 'react';
import { create } from 'react-test-renderer';
import Button from '.';

describe('Button', () => {
  describe('Normal button', () => {
    it('Renders correctly', () => {
      const tree = create(
        <Button onPress={() => console.log('Pressed')} title="Hello world" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly loading state', () => {
      const tree = create(
        <Button
          loading
          onPress={() => console.log('Pressed')}
          title="Hello world"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly disabled state', () => {
      const tree = create(
        <Button
          disabled
          onPress={() => console.log('Pressed')}
          title="Hello world"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Inverted button', () => {
    it('Renders correctly', () => {
      const tree = create(
        <Button
          inverted
          onPress={() => console.log('Pressed')}
          title="Hello world"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly loading state', () => {
      const tree = create(
        <Button
          loading
          inverted
          onPress={() => console.log('Pressed')}
          title="Hello world"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly disabled state', () => {
      const tree = create(
        <Button
          disabled
          inverted
          onPress={() => console.log('Pressed')}
          title="Hello world"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
