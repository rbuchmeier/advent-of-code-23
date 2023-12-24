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

  describe('Day 2', () => {
    const solver = solvers[2];
    test('two1nine', () => {
      expect(solver('two1nine')).toBe('29');
    });
    test('eightwothree', () => {
      expect(solver('eightwothree')).toBe('83');
    });
    test('abcone2threexyz', () => {
      expect(solver('abcone2threexyz')).toBe('13');
    });
    test('xtwone3four', () => {
      expect(solver('xtwone3four')).toBe('24');
    });
    test('4nineeightseven2', () => {
      expect(solver('4nineeightseven2')).toBe('42');
    });
    test('zoneight234', () => {
      expect(solver('zoneight234')).toBe('14');
    });
    test('7pqrstsixteen', () => {
      expect(solver('7pqrstsixteen')).toBe('76');
    });
    test('full example input', () => {
      expect(
        solver(
          'two1nine\n' +
            'eightwothree\n' +
            'abcone2threexyz\n' +
            'xtwone3four\n' +
            '4nineeightseven2\n' +
            'zoneight234\n' +
            '7pqrstsixteen'
        )
      ).toBe('281');
    });
  });
});
