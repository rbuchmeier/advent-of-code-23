import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type CalendarProps = {
  selectedDay: number;
  handleChange: (day: number) => void;
};

export function Calendar({ selectedDay, handleChange }: CalendarProps) {
  return (
    <>
      <ToggleButtonGroup value={selectedDay} exclusive>
        {Array.from(Array(25).keys()).map((i) => {
          const day = i + 1;
          return (
            <ToggleButton
              value={day}
              onClick={() => handleChange(day)}
              key={day}
            >
              {day}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
}
