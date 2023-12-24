const solvers: Record<number, (input?: string) => string> = {
  0: () => 'Date not supported',
  1: (input) => {
    if (input) {
      const lines = input.split('\n');
      return lines
        .reduce((acc, line) => {
          const numbers = line.match(/\d/g);
          if (numbers) {
            const first = numbers[0];
            const last = numbers[numbers.length - 1];
            return acc + Number(first + last);
          }
          return acc;
        }, 0)
        .toString();
    }
    return '';
  },
  2: (input) => {
    if (!input) {
      return '';
    }
    const lines = input.split('\n');
    return String(
      lines.reduce((total, line) => {
        const firstValue = findValueOfFirstMatch(line);
        const lastValue = findValueOfLastMatch(line);
        return total + Number(firstValue + lastValue);
      }, 0)
    );
  },
};

const numberMap: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

export const findValueOfFirstMatch = (str: string) => {
  const searchStrings = [
    ...Object.keys(numberMap),
    ...Array.from(Array(10).keys()).map((n) => (n + 1).toString()),
  ];
  return searchStrings.reduce(
    (acc: { value: string; index: number }, searchString) => {
      const index = str.indexOf(searchString);
      if (index === -1) {
        return acc;
      }
      const value = numberMap[searchString] || searchString;
      if (acc.index === -1 || index < acc.index) {
        return { value, index };
      }
      return acc;
    },
    { value: '', index: -1 }
  ).value;
};

export const findValueOfLastMatch = (str: string) => {
  const searchStrings = [
    ...Object.keys(numberMap),
    ...Array.from(Array(10).keys()).map((n) => (n + 1).toString()),
  ];
  return searchStrings.reduce(
    (acc: { value: string; index: number }, searchString) => {
      const index = str.lastIndexOf(searchString);
      if (index === -1) {
        return acc;
      }
      const value = numberMap[searchString] || searchString;
      if (acc.index === -1 || index > acc.index) {
        return { value, index };
      }
      return acc;
    },
    { value: '', index: -1 }
  ).value;
};

export default solvers;
