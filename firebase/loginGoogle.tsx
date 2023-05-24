import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";


const LoginWithGoogle = () => {

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const router = useRouter();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        router.push("/application");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div onClick={handleLogin} style={{ cursor: "pointer" }}>
      <Image
        src="/btn_google_signin_light_normal_web@2x.png"
        width={382 * 0.6}
        height={92 * 0.6}
        alt="Sign in with Google"
      />
    </div>
  );
};

export default LoginWithGoogle;