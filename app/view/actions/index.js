export const SET_USERTYPE = 'SET_USERTYPE'

export function setUserType(userType) {
  return {
    type: SET_USERTYPE,
    userType
  }
}
