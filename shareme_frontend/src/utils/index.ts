import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any, addUser: any) => {
  const decode = jwt_decode(response.credential);
  console.log(decode, "mail");
};