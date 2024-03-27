import "./ModalWithForm.scss";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="modal__title">{title}What's your number?</h3>
          <div className="modal__button-container">
            <button
              className="modal__button-close"
              type="button"
              onClick={onClose}
            />
          </div>
        </div>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button className="modal__button-submit" type="submit">
            {buttonText}Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
