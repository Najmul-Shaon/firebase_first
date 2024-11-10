import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./Firebase/FIrebase.init";

const MainLayout = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h3>Main</h3>
      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
};

export default MainLayout;
