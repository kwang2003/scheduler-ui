import decode from 'jwt-decode';

// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return localStorage.getItem('antd-pro-authority') || 'admin';
  // return localStorage.getItem("access_token");
}

export function setAuthority(authority) {
  // return localStorage.setItem('antd-pro-authority', authority);
  localStorage.setItem("access_token",authority.result.token);
}
export function getAccessToken() {
  // return localStorage.getItem('antd-pro-authority') || 'admin';
  return localStorage.getItem("access_token");
}

export function setAccessToken(response) {
  // return localStorage.setItem('antd-pro-authority', authority);
  return localStorage.setItem("access_token",response.result.token);
}

// 判断当前是否已经登录
export function isLoggedIn(){
  const token = getAccessToken();
  return token && !isTokenExpired(token);
}

export function isTokenExpired(token){
  try{
    const decoded = decode(token);
    if(decoded.exp < Date.now()/1000){
      return true;
    }else{
      return false;
    }
  } catch (error){
    console.error(error);
    return false;
  }
}

export function getProfile(){
  return decode(getAccessToken());
}

