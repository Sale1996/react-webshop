
export default function getRolesFromToken(token:string) {
    const jwtData = token.split(".")[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    
    return decodedJwtData
  }
  