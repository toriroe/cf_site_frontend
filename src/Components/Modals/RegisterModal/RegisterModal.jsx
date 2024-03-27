import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.scss";

const RegisterModal = ({ onClose, onRegister, onAltClick }) => {
  return (
    <ModalWithForm
      name="register"
      title="We need some info..."
      //   onClose={onClose}
      buttonText="Next"
      altText="Already a user?"
      altButtonText="Log in"
      //   onAltClick={onAltClick}
      //   onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label className="modal__input">
          <p className="modal__input-title">Name</p>
          <input
            className="modal__form-input"
            type="name"
            name="name"
            placeholder="Smithy McPlaceholder"
            required
          />
          <span className="modal__error"></span>
        </label>
        <label className="modal__input">
          <p className="modal__input-title">Email</p>
          <input
            className="modal__form-input"
            type="email"
            name="email"
            placeholder="smithyP@hotmail.com"
            required
          />
          <span className="modal__error"></span>
        </label>
        <label className="modal__input">
          <p className="modal__input-title">Password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password"
            placeholder="************"
            required
          />
          <span className="modal__error"></span>
        </label>
        <label className="modal__input">
          <p className="modal__input-title">Confirm Password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password-check"
            placeholder="************"
            required
          />
          <span className="modal__error"></span>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
