import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    value: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  handleClick = () => {
    const { onAddTodo } = this.props;
    const { value } = this.state;
    onAddTodo(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    return (
        <div>
          <input value={value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Add</button>
        </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default AddTodo;
