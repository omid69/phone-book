import React from 'react';
import TextField, {Input} from "@material/react-text-field";
import {phoneTypes} from '../../../../../../data/types/phones';
import SelectMenu from '../../../../../../components/SelectMenu';
import MaterialIcon from "@material/react-material-icon";
import IconButton from '@material/react-icon-button';

const PhoneField = ({phone: {number, type}, setPhoneType, onChange, removePhone, id}) => {
    return (
        <section className='flex justify-between items-center mb1'>

            <TextField className='col-7'>
                <Input value={number} onChange={onChange} id={`${id}.number`}/>
            </TextField>

            <SelectMenu items={Object.values(phoneTypes)} selectedItem={type}
                        onSelectItem={setPhoneType}/>

            <IconButton onClick={removePhone}>
                <MaterialIcon icon="remove"/>
            </IconButton>

        </section>
    );
};

export default PhoneField;
