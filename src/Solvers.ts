const solvers: Record<number, (input?: string) => string> = {
  0: () => 'Date not supported',
  1: (input) => 'This is the input I got for Day 1: ' + input,
};
export default solvers;
