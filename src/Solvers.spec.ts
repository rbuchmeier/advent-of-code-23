import { describe, expect, test } from 'vitest';
import Solvers from './Solvers.ts';

describe('Solvers', () => {
  const solvers = Solvers;
  describe('Day 1', () => {
    const solver = solvers[1];
    test('only numbers should concat the first and last digit', () => {
      expect(solver('1234')).toBe('14');
    });
    test('numbers and letters should concat the first and last digit', () => {
      expect(solver('1a2b3c4')).toBe('14');
    });
    test('only one number should be both first and last', () => {
      expect(solver('1')).toBe('11');
    });
    test('two lines should concat the first and last digit of each line then sum', () => {
      expect(solver('1234\n5678')).toBe('72');
    });
    test('two lines with letters should concat the first and last digit of each line then sum', () => {
      expect(solver('1a2b3c4\n5d6e7f8')).toBe('72');
    });
    test('three lines should concat the first and last digit of each line then sum', () => {
      expect(solver('1234\n5678\n9012')).toBe('164');
    });
  });
});
