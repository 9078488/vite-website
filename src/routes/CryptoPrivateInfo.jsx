import SignIn from './SignIn';
import auth from "../components/auth"

function CryptoPrivateInfo() {
    const user = auth.currentUser();
    return (
        <>
            { user ? <div>CryptoPrivateInfo</div> : <SignIn />}
        </>
    );   
}

export default CryptoPrivateInfo;