import './App.css';
import BasicInput from './BasicInput.tsx';
import { Calendar } from './Calendar.tsx';
import { Answer } from './Answer.tsx';
import { useRef, useState } from 'react';
import solvers from './Solvers.ts';

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [output, setOutput] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const handleDayChange = (day: number) => {
    setSelectedDay(day);
    solve(day);
  };
  const solve = (day: number) => {
    const solver = solvers[day] ?? solvers[0];
    const input = inputRef.current?.value;
    setOutput(input ? solver(input) : 'No Input');
  };
  return (
    <>
      <h1>Advent of Code 2023</h1>
      <div className="app">
        <Calendar selectedDay={selectedDay} handleChange={handleDayChange} />
        <BasicInput inputRef={inputRef} onChange={() => solve(selectedDay)} />
        <Answer output={output} />
      </div>
    </>
  );
}

export default App;
