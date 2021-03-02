import * as React from 'react';
import { create } from 'react-test-renderer';
import TextField from '.';

describe('TextField', () => {
  describe('Outlined mode', () => {
    it('Renders correctly', () => {
      const tree = create(
        <TextField label="Hello world" mode="outlined" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly disabled', () => {
      const tree = create(
        <TextField disabled label="Hello world" mode="outlined" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly with error', () => {
      const tree = create(
        <TextField
          error="Something wrong!"
          label="Hello world"
          mode="outlined"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Flat mode', () => {
    it('Renders correctly', () => {
      const tree = create(
        <TextField label="Hello world" mode="flat" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly disabled', () => {
      const tree = create(
        <TextField disabled label="Hello world" mode="flat" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders correctly with error', () => {
      const tree = create(
        <TextField error="Something wrong!" label="Hello world" mode="flat" />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
