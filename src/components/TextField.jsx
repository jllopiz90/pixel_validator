import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from '../utils/utils';

const TextFieldStyles = styled.textarea`
  background-color: black;
  color: white;
  border: ${props => props.error ? "2px solid red" : "2px solid #61dafb"};
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #719ECE;
    border: 2px solid;
    border-color: ${props => Boolean(props.error) ? "red" : "#00ff7d"};
  }
 `;

 const ErrorMessage = styled.span`
  color: red;
  font-size: 15px;
  margin-top: 20px;
  width: 500px;
  @media (max-width: 380px) {
    width: 280px;
    font-size: 11px;
  }
`;

const SuccessMessage = styled.span`
  color: #04ec74;
  font-size: 15px;
  margin-top: 20px;
  width: 500px;
  @media (max-width: 380px) {
    width: 280px;
  }
`;

function TextField(props) {
  const {
    rows, cols, name, error, onChange, value, message,
  } = props;
  
  const finalRows = isMobile() && rows > 15 ? 15 : rows;
  const finalCols = isMobile() && cols > 30 ? 30 : cols;

  return (
    <>
    <TextFieldStyles
      cols={finalCols}
      rows={finalRows}
      name={name}
      id="validator"
      value={value}
      onChange={({ target: { value }}) => onChange(value)}
      error={error}
      autoFocus
    />
    {error && <ErrorMessage>{message}</ErrorMessage>}
    {!error && Boolean(value) && <SuccessMessage>Valid pixel!</SuccessMessage>}
    </>
  );
}

TextField.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  name: PropTypes.string,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  rows: 25,
  cols: 60,
  name: 'textInput',
  message: '',
  error: false,
};

export default TextField;