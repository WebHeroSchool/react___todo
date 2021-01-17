import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputTask: '',
    error: false
  };

  onButtonClick = () => {
    if (this.state.inputTask === '') {
      this.setState({error: true, helperText: 'Введите задание!'});
    } 
    else if (this.props.thingToDo.find(item => item.task === this.state.inputTask )) {
      this.setState({error: true, helperText: 'Такое задание уже есть!'});
    } else {
      this.setState({
        inputTask: '',
        error: false,
        helperText: ''
      });
      this.props.onClickAdd(this.state.inputTask);
    }
  };

  render() {
    const { onClickAdd, thingToDo } = this.props;

    return (<div className={styles.input}>
      <TextField
        className={styles.inputTask}
        id="outlined-full-width"
        style={{ margin: 0 }}
        placeholder="Добавить задание"
        fullWidth
        margin="normal"
        variant="outlined"
        error = {this.state.error}
        helperText = {this.state.helperText}
        value = {this.state.inputTask}
        onChange = {event => this.setState({ inputTask: event.target.value })}
      />
      <button 
        variant="contained"
        color="primary"
        fullWidth
        onClick = {this.onButtonClick}
        className={styles.btn}
      >
        ДOБАВИТЬ ЗАДАНИЕ
      </button>
    </div>); 
  }
};

InputItem.propTypes = {
  thingToDo: PropTypes.array.isRequired,
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;

