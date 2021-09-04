/* eslint-disable */
import {API} from 'aws-amplify';
const apiName = 'PomegranateAPI';

class AmplifyAPIService {

  getUserByUsername(){
    // if does exist, save info
    // if doesn't exist, show DOES NOT EXIST
    const response = API.get(apiName,'/users/coaches')
    .then((res) => {
      return res.items;
    }, (error) => {
      console.log(error);
    });

    return response;
  }

  getCoaches(){
    const response = API.get(apiName,'/users/coaches')
    .then((res) => {
      return res.items;
    }, (error) => {
      console.log(error);
    });

    return response;

  }

  postUser(username, account_type, first_name, last_name){
    const response = API.post(apiName,'/users/add', {
      
      body:{
        'username': username,
        'account_type': account_type,
        'first_name' : first_name,
        'last_name' : last_name
      }

    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
   return response;
  }

  testReq(){
    const response = API.post(apiName,'/users/add', {
      
      body:{
        "username": 'first legit user',
        "account_type": 'first legit acc type'
      }

    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
   return response;
  }

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