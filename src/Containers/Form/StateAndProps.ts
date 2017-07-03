import * as React from 'react';
import {FormFieldModel} from '../../models';

export interface FormProps extends FormState {
    fields:FormFieldModel[];
    onInputChange:(e) => void;
    onSubmit: () => void;
}

export interface FormState {
    data: any;
}