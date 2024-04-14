import "./ProfileForm.scss";

function ProfileForm({ title, buttonText, onSubmit, formtype }) {
  return (
    <div className="profile">
      <div className={`profile-form profile-form_${formtype}`}>
        <h2 className="profile-form__header">{title}</h2>
        <form className="profile-form__form form">
          <label className="form__label" htmlFor="age">
            <p className="form__input-title">Age</p>
            <select name="age" className="form__input">
              <option value="placeholder" selected>
                Choose age
              </option>
              <option value="option">19</option>
              <option value="option">20</option>
              <option value="option">21</option>
              <option value="option">22</option>
              <option value="option">23</option>
              <option value="option">24</option>
              <option value="option">25</option>
              <option value="option">26</option>
              <option value="option">27</option>
              <option value="option">28</option>
              <option value="option">29</option>
              <option value="option">30</option>
              <option value="option">31</option>
              <option value="option">32</option>
              <option value="option">33</option>
              <option value="option">34</option>
              <option value="option">35</option>
              <option value="option">36</option>
              <option value="option">37</option>
              <option value="option">38</option>
              <option value="option">39</option>
              <option value="option">40</option>
              <option value="option">41</option>
              <option value="option">42</option>
              <option value="option">43</option>
              <option value="option">44</option>
              <option value="option">45</option>
              <option value="option">46</option>
              <option value="option">47</option>
              <option value="option">48</option>
              <option value="option">49</option>
              <option value="option">50</option>
            </select>

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
              Tell us a little about yourself! Your high school mascot, star
              sign, how you like your coffee, why your favorite obscure indie
              folk band is objectively the best...this text box is your oyster!
            </p>
            <textarea
              className="form__input"
              name="description"
              placeholder="Description"
              required
            ></textarea>
            <span className="form__error"></span>
          </label>
          <div className="form__submit-area">
            <p className="form__submit-text">
              Finally...now that that’s over with let’s go find The One!
            </p>
            <span className="form__error-final"></span>
            <button
              className="form__button-submit"
              type="submit"
              onClick={onSubmit}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
