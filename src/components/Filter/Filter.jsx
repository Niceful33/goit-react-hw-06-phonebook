import React from 'react';
import { Label, Input } from './Filter.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const input = useSelector(selectFilter);

  const handleInputFilter = event => {
    const inputData = event.currentTarget.value;
    dispatch(setFilterValue(inputData));
  };

  return (
    <Label htmlFor="">
      Find contacts by name:
      <Input type="text" value={input} onChange={handleInputFilter} />
    </Label>
  );
}
