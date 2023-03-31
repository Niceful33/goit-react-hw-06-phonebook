import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px 10px 10px;
  gap: 15px;
`;

export const Submit = styled.button`
  padding: 5px;
  width: 140px;
  margin: 10px auto;
  display: block;
  border: 1px solid rgba(137, 153, 155, 0.8);
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: transparent;
  }
`;

export const InputForm = styled.input`
  border: 2px solid rgba(102, 137, 153, 0.8);
  border-radius: 4px;
  padding: 5px;
  outline: none;
  &:hover,
  &:focus {
    border: 2px solid rgba(25, 61, 78, 0.8);
  }
`;
