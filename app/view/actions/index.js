import {ajax} from '../../utils'
export const SET_USERTYPE = 'SET_USERTYPE'
export const SET_DONOR = 'SET_DONOR'
export const COMMITED_DONOR = 'COMMITED_DONOR'

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

export function commitDonor(donor) {
  return dispatch => {
    ajax('POST', '/donor', (commitedResult) => { dispatch(commitedDonor()) }, JSON.stringify(donor) )
  }
}

export function commitedDonor() {
  return {
    type: COMMITED_DONOR
 }
}
