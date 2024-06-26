import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/_ModalWithForm.scss";

const LoginModal = ({ onClose, onRegister, onAltClick }) => {
  return (
    <ModalWithForm
      name="login"
      title="Welcome back!"
      onClose={onClose}
      buttonText="Log in"
      altText="New here?"
      altButtonText="Sign up"
      onAltClick={onAltClick}
      //   onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label className="modal__input" htmlFor="email">
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
        <label className="modal__input" htmlFor="password">
          <p className="modal__input-title">Password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password"
            placeholder="************"
            required
          />
          <span className="modal__error">This is an error</span>
        </label>
        <span className="modal__error-bottom">Email or password incorrect</span>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
