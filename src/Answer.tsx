type AnswerProps = {
  output: string;
};

export function Answer({ output }: AnswerProps) {
  return (
    <>
      <span>{output}</span>
    </>
  );
}
