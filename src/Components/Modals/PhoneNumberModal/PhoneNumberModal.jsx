import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.scss";

const PhoneNumberModal = ({ onClose, onRegister, onAltClick }) => {
  return (
    <ModalWithForm
      name="number"
      title="What's your number?"
      //   onClose={onClose}
      buttonText="Next"
      altText=""
      altButtonText=""
      //   onAltClick={onAltClick}
      //   onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <p className="modal__text">
          Enter your mobile number to verify you don't already have an account
          with us.
        </p>
        <label className="modal__input" for="number">
          <input
            className="modal__form-input"
            type="tel"
            name="number"
            placeholder="(444) 444-4444"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <span className="modal__error"></span>
        </label>

        <span className="modal__error-bottom"></span>
      </div>
    </ModalWithForm>
  );
};

export default PhoneNumberModal;
