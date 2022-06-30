import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const { user, loading, error } = useUserContext();

  const onGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup( auth ,provider).then((re) => {
      console.log(re);
    }).catch((err)=>{
      console.log(err);
    })
  }

  // const onFacebookSignIn = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup( auth ,provider).then((re) => {
  //     console.log(re);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }





  return (
    <div className="App">
      {error && <p className="error">{error}</p>}

      {
        user ? '' :  <div className="d-grid gap-2 d-md-block">
        <button type="button" class="btn btn-outline-success btn-lg" onClick={onGoogleSignIn}>Sign in with Google </button>
        <button type="button" class="btn btn-outline-primary btn-lg mb-4" >Sign in with Facebook</button>
      </div>
      }

     

      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;
