import Header from "../Header/Header";
import ProfileForm from "../ProfileForm/ProfileForm";

function EditProfile({ type }) {
  return (
    <>
      <Header />
      {type === "create" ? (
        <ProfileForm
          title="Tell us a little about yourself!"
          buttonText="Save & Next"
        />
      ) : type === "edit" ? (
        <ProfileForm title="Edit profile" buttonText="Save" />
      ) : (
        ""
      )}
    </>
  );
}

export default EditProfile;
