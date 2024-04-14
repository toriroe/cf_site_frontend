import "./EditProfile.scss";
import Header from "../Header/Header";
import ProfileForm from "../ProfileForm/ProfileForm";

function EditProfile() {
  return (
    <>
      <Header />
      <main className="edit-profile">
        <ProfileForm />
      </main>
    </>
  );
}

export default EditProfile;
