import { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomContext } from '../../../utils/context';


  function SelectColor() {
  const {color, setColor} = useContext(CustomContext);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value='black'>Black</MenuItem>
          <MenuItem value='white'>White</MenuItem>
          <MenuItem value='red'>Red</MenuItem>
          <MenuItem value='blue'>Blue</MenuItem>
          <MenuItem value='pink'>Pink</MenuItem>
          <MenuItem value='grey'>Grey</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectColor;