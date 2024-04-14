import "./ProfileForm.scss";
import Logo from "../../assets/images/logo-placeholder-white.svg";

function ProfileForm({ formtype }) {
  return (
    <div className={`profile-form profile-form_${formtype}`}>
      <h2 className="profile-form__header">Tell us a little about yourself!</h2>
      <form className="profile-form__form form">
        <label className="form__label" htmlFor="age">
          <p className="form__input-title">Age</p>
          <input
            className="form__input"
            type="number"
            name="age"
            placeholder="27"
            required
          />
          <span className="form__error"></span>
        </label>
        <label className="form__label" htmlFor="gender">
          <p className="form__input-title">Gender identity</p>
          <select name="gender" className="form__input" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <span className="form__error"></span>
        </label>
        <label className="form__label" htmlFor="interest">
          <p className="form__input-title">Interested in</p>
          <select
            name="interest"
            className="form__input"
            placeholder="Men"
            required
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="everyone">Everyone</option>
          </select>
          <span className="form__error"></span>
        </label>
        /* -------------------------- Location will go here
        ------------------------- */
        <label className="form__label" htmlFor="occupation">
          <p className="form__input-title">Occupation</p>
          <input
            className="form__input"
            type="text"
            name="occupation"
            placeholder="Occupation"
            required
          />
          <span className="form__error"></span>
        </label>
        <label className="form__label" htmlFor="description">
          <p className="form__input-title">
            Tell us a little about yourself! Your high school mascot, star sign,
            how you like your coffee, why your favorite obscure indie folk band
            is objectively the best...this text box is your oyster!
          </p>
          <textarea className="form__input" name="description" required>
            Description
          </textarea>
          <span className="form__error"></span>
        </label>
        <div className="form__submit-area">
          <p className="form__submit-text">
            Finally...now that that’s over with let’s go find The One!
          </p>
          <span className="form__error-final"></span>
          <button className="form__button-submit" type="submit">
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
