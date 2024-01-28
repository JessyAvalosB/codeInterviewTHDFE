/* eslint-disable @typescript-eslint/no-explicit-any */
const firebaseErrorMessage = (error: any) => {

    if (error && error.code) {
        switch (error.code) {
            case "auth/email-already-in-use":
                return { message: "Email already used.", delay: 3000 }
                break;
            case "auth/weak-password":
                return { message: "Password should be at least 6 characters.", delay: 3000 }
                break;
            case "auth/invalid-credential":
                return { message: "Incorrect Email or Password.", delay: 3000 }
                break;
            case "auth/too-many-requests":
                return { message: "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.", delay: 6000 }
                break;
            default:
                return { message: 'Something Went Wrong.', delay: 3000 }
                break
        }
    }
}

export default firebaseErrorMessage
