import React from 'react';

function Input({ name, type, placeholder }) {
    return (
        <div className="mdc-text-field">
            <input
                id={name}
                className="mdc-text-field__input"
                autoComplete="false"
                required
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;