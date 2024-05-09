import React from 'react';

function ControlledComponents() {
    const [messageValue, setMessageValue] = React.useState('');
    const [termsAndConditionsValue, toggleTermsAndConditionsValue] = React.useState(false);

    return (
        <form>
            <label htmlFor="form-message">
                Bericht:
                <input
                    type="text"
                    id="form-message"
                    name="message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
            </label>
            <label htmlFor="form-terms-and-conditions">
                <input
                    type="checkbox"
                    id="form-terms-and-conditions"
                    name="terms-conditions"
                    value={termsAndConditionsValue}
                    onChange={(e) => toggleTermsAndConditionsValue(!termsAndConditionsValue)}
                />
                Ik ga akkoord met de algemene voorwaarden
            </label>
        </form>
    );
}

export default ControlledComponents;