export const SET_USERTYPE = 'SET_USERTYPE'
export const SET_DONOR = 'SET_DONOR'

export function setUserType(userType) {
  return {
    type: SET_USERTYPE,
    userType
  }
}

export function setDonor(donor) {
  return {
    type: SET_DONOR,
    donor
  }
}
