import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

export default function BasicDatePicker({ setFunction, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{width: "100%", padding: 0}}>
      <DemoContainer components={['DatePicker']} sx={{width: "100%", '&.MuiInputBase-root': {width: "100%", padding: 0}}}>
        <DatePicker 
          sx={{width: "100%"}} 
          views={["day","month", "year"]}
          label={label}
          renderInput={(params) => <TextField {...params} />}
          mask="__-__-____"
          format="DD/MM/YYYY"
          onChange={(newValue) => {
            console.log(`${new Date(newValue).getFullYear()}-${new Date(newValue).getMonth() + 1}-${new Date(newValue).getDate()}`);
            setFunction(`${new Date(newValue).getFullYear()}-${new Date(newValue).getMonth() + 1}-${new Date(newValue).getDate()}`);
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}