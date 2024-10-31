export const validateRequiredField = (value, label = "Field") => {
    let error;
    if (!value) {
        error = `The ${label} is required`;
    }
    return error;
};

export const validateEmail = (value, label = 'Email') => {
    let error;
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = `The ${label} format is invalid.`;
    }
    return error;
}

