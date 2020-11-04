import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextFieldStyles = styled.textarea``;

function TextField(props) {
  const { rows, cols, name } = props;
  return (
    <TextFieldStyles
      cols={cols}
      rows={rows}
      name={name}
    />
  );
}

TextField.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  name: PropTypes.string,
};

TextField.defaultProps = {
  rows: 30,
  cols: 30,
  name: 'textInput'
};

export default TextField;