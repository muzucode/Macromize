import {API} from 'aws-amplify';

const apiName = 'StrawberryAPI';
/* eslint-disable */
const myInit = { // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {  // OPTIONAL
      name: 'param',
  },
};

class AmplifyAPIService {

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