import { Auth } from 'aws-amplify';

class AmplifyAuthService {
  async signUp(username, password, email, phone_number) {
    // If email is blank, default it to mangozango
    email ? email : "mangozango222@gmail.com";
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
              email,
              phone_number
            }
        });
        console.log(user);
        console.log('Signed up!');
    } catch (error) {
        console.log('error signing up:', error);
    }
  }

  async signIn(username, password) {
    try {
      // eslint-disable-next-line no-unused-vars
        const user = await Auth.signIn(username, password);
        console.log('User has been signed in');
        return 'USER HAS SIGNED IN'
    } catch (error) {
        console.log('error signing in', error);
        return false
    }
  }

  async confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
      console.log('USER HAS BEEN VERIFIED');
      return true
      
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  async resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
  }

  async signOut() {
    try {
        await Auth.signOut();
        console.log('User has been signed out');
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  async currentSession(){
    return Auth.currentSession()
      .then(data => {
        console.log('In the service:');
        console.log(data);
        return data;

      })

  }

  async currentAuthenticatedUser(){
    return Auth.currentAuthenticatedUser()
    .then(data => {
      console.log('In the service:');
      console.log(data);
      return data;
    })
    .catch(err => console.log(err));
  }

  async forgotPassword(username) {
    // Send confirmation code to user's email
    Auth.forgotPassword(username)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  async forgotPasswordSubmit(username, code, new_password){
    // Collect confirmation code and new password, then
    Auth.forgotPasswordSubmit(username, code, new_password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
}


export default new AmplifyAuthService();

