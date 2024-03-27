import "./ModalWithForm.scss";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  altText,
  altButtonText,
  onAltClick,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
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
            {buttonText}
          </button>
          <p className="modal__alt-text">
            {altText}
            <button className="modal__button-alt" onClick={onAltClick}>
              {altButtonText}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
