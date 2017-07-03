export const FORM_START = 0x100000;

export const TYPES = {
    SUBMIT_FORM     : FORM_START | 0x000001, 
    VALUE_CHANGED   : FORM_START | 0x000002 
}; 

export const ACTIONS = {
    SUBMIT_FORM: () => ({
        type:TYPES.SUBMIT_FORM,
    }),
    VALUE_CHANGED: (data:any) => ({
        type:TYPES.VALUE_CHANGED,
        data
    }),                     
};