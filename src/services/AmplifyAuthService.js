import { Auth } from 'aws-amplify';

class AmplifyAuthService {
  async signUp(username, password, email, phone_number, account_type, first_name, last_name) {
    // Check if inputs are blank
    email ? email : "mangozango222@gmail.com";
    first_name ? first_name : 'NO_FIRSTNAME_PROVIDED';
    last_name ? last_name : 'NO_LASTNAME_PROVIDED';

    try {
      // Add user to Cognito
        const { user } = await Auth.signUp({
            username: username,
            password: password,
            attributes: {
              email: email,
              phone_number: phone_number,
              'custom:account_type': account_type
            }
        });

        return user;
    } catch (error) {
        console.log('error signing up:', error);
        window.alert('Please make sure all fields are filled out correctly');
        throw new Error(error);
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
    try {
      const data = await Auth.currentAuthenticatedUser();
      return data;
    } catch (err) {
      return console.log(err);
    }
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

  async getCurrentUserId () {
    const { attributes } = await Auth.currentAuthenticatedUser();
    // return current user Id
    return await attributes.sub;
  }
  
}


export default new AmplifyAuthService();

