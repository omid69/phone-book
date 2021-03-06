import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField, {Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

class CleanableTextField extends Component {
    focusInput = () => {
        const inputElement = this.textInput && this.textInput.inputElement;
        if (inputElement) {
            inputElement.focus();
        }
    };

    cleanAndFocus = () => {
        this.props.setValue('');
        this.focusInput();
    };

    render() {
        const {isValid, value, setValue, onBlur, id, ...props} = this.props;
        return (
            <TextField {...props} onTrailingIconSelect={this.cleanAndFocus}
                       trailingIcon={<MaterialIcon role="button" icon="delete"/>}>
                <Input id={id} value={value} onChange={(e) => setValue(e.currentTarget.value)}
                       isValid={isValid} onBlur={onBlur} ref={input => this.textInput = input}/>
            </TextField>
        );
    }
}

export default CleanableTextField;

CleanableTextField.propTypes = {
    id: PropTypes.string,
    isValid: PropTypes.bool,
    onBlur: PropTypes.func,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string
};