import {API} from 'aws-amplify';

const apiName = 'PomegranateAPI';
/* eslint-disable */
// const myInit = { // OPTIONAL
//   body: {
//     data: ''
//   }
// };

class AmplifyAPIService {

  postUser(username){
    const response = API.post(apiName, '/users/add', {body: username} )
    .then(res => {
      // Add your code here
      console.log('yo');
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response;
  }


// COME BACK TO THIS. FIGURING OUT HOW TO MAKE POST REQUEST FROM LOCAL HOST.










  // Sample get request
  getReq(){
    const response = API.get(apiName, '/items')
    .then(res => {
      // Add your code here
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response
  }

  // Sample get request
  getWorks(){
    const response = API.get(apiName, '/works')
    .then(res => {
      // Add your code here
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
    });

    return response
  }

  postWork(){
    const response = API.post(apiName, '/works/generate')
    .then(res => {
      // Add your code here
      console.log('yo');
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response
  }

  generateWork(){
    const response = API.get(apiName, '/works/generate')
    .then(res => {
      // Add your code here
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response
  }  
  
  generateItem(){
    const response = API.get(apiName, '/items/generate')
    .then(res => {
      // Add your code here
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response
  }

  loadWork(){
    const response = API.get(apiName, '/items/load')
    .then(res => {
      // Add your code here
      console.log(res);
    })
    .catch(error => {
      console.log(error.response);
   });

   return response
  }
}


export default new AmplifyAPIService();