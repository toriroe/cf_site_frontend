import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/_ModalWithForm.scss";

const PhoneNumberModal = ({ onClose, onAltClick, handleSubmit }) => {
  return (
    <ModalWithForm
      name="number"
      title="What's your number?"
      onClose={onClose}
      buttonText="Next"
      altText="Already a user?"
      altButtonText="Log in"
      onSubmit={handleSubmit}
      onAltClick={onAltClick}
    >
      <div className="modal__form-content">
        <p className="modal__text">
          Enter your mobile number to verify you don't already have an account
          with us.
        </p>
        <label className="modal__input" htmlFor="number">
          <input
            className="modal__form-input modal__form-input-number"
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
