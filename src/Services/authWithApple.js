import { OAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
const provider = new OAuthProvider('apple.com');
const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // Apple credential
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;

        console.log(user)
        console.log(accessToken)
        console.log(idToken)
        // IdP data available using getAdditionalUserInfo(result)
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(error);
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
    });