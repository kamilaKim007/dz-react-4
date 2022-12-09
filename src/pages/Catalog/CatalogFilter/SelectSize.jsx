import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';

 function SelectSize() {
    const {category, size, setSize} = useContext(CustomContext)

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        
            {
                category === "shoes" ? 
                <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Размер"
          onChange={handleChange}>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                </Select> 

                : category === "t-shirts" || category === "sweatshirts" ? 
                <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Размер"
          onChange={handleChange}>
        
        <MenuItem value='S'>S</MenuItem>
                    <MenuItem value='M'>M</MenuItem>
                    <MenuItem value='L'>L</MenuItem>
                    </Select>

                    : category === "pants" ?
                    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Размер"
          onChange={handleChange} >
             <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
            </Select> : ''
            }
      </FormControl>
      </Box>
  );
}
export default SelectSize;