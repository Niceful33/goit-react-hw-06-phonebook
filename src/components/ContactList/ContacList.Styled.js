import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid rgba(164, 155, 123, 0.8);
  border-radius: 3px;
  padding: 5px;
  display: flex;
  gap: 10px;
  font-size: 18px;
  margin-top: 5px;
`;
export const Button = styled.button`
  margin-left: auto;
  padding: 5px;
  width: 80px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: transparent;
  }
`;
