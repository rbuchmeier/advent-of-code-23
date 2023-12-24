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
};
export default solvers;
