import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/_ModalWithForm.scss";

const EditAccountModal = ({ onClose, onRegister, onAltClick }) => {
  return (
    <ModalWithForm
      name="edit-account"
      title="Edit account details"
      onClose={onClose}
      buttonText="Save"
      altText=""
      altButtonText=""
      //   onAltClick={onAltClick}
      //   onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label className="modal__input" htmlFor="name">
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
        <label className="modal__input" htmlFor="password-current">
          <p className="modal__input-title">Current password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password-current"
            placeholder="************"
            required
          />
          <span className="modal__error"></span>
        </label>
        <label className="modal__input" htmlFor="password-new">
          <p className="modal__input-title">New password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password-new"
            placeholder="************"
            required
          />
          <span className="modal__error"></span>
        </label>
        <label className="modal__input" htmlFor="password-confirm">
          <p className="modal__input-title">Confirm password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password-confirm"
            placeholder="************"
            required
          />
          <span className="modal__error"></span>
        </label>
        <span className="modal__error-bottom"></span>
      </div>
    </ModalWithForm>
  );
};

export default EditAccountModal;
