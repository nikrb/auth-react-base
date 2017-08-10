
function postSignup( payload){
  return fetch( '/auth/signup', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON)
  .then( function( response){
    console.log( "post signup response:", response);
  });
}

function postLogin(payload){
  return fetch( '/auth/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON)
  .then( function( response){
    console.log( "post login response:", response);
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Actions = { postSignup, postLogin};
export default Actions;