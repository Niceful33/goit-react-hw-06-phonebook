import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: uppercase;

  font-weight: 600;
`;

export const Input = styled.input`
  padding: 5px;
  width: 200px;
  border: 2px solid rgba(102, 137, 153, 0.8);
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  &:hover,
  &:focus {
    border: 2px solid rgba(25, 61, 78, 0.8);
  }
`;
