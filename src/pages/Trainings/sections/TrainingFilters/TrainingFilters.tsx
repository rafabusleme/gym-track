import React from 'react';

import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['fullBody', 'lowerBody', 'upperBody', 'legs', 'pull', 'push', 'strength'];

const TrainingFilters = () => {
  const [tags, setTag] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <>
      <section className='trainings__tag-picker'>
        <FormControl sx={{ m: 1, width: 220 }}>
          <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
          <Select
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox'
            multiple
            value={tags}
            onChange={handleChange}
            input={<OutlinedInput label='Tag' />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={tags.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
      <section className='trainings__time-picker'>
        <TextField
          className='filters'
          id='date'
          label='Start Date'
          type='date'
          defaultValue='2022-01-01'
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id='date'
          label='End Date'
          type='date'
          defaultValue='2022-05-01'
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </section>
    </>
  );
};

export default TrainingFilters;
