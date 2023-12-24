import { TextField } from '@mui/material';
import { RefObject } from 'react';

type BasicInputProps = {
  inputRef: RefObject<HTMLInputElement>;
  onChange: () => void;
};

export default function BasicInput({ inputRef, onChange }: BasicInputProps) {
  return (
    <TextField
      id="standard-basic"
      label="input"
      multiline
      rows={5}
      inputRef={inputRef}
      onChange={onChange}
    />
  );
}
