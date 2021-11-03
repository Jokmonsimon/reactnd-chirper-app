import { getInitialData } from '../utils/api'
import { receiveUsers } from './Users'
import { receiveTweets } from './Tweets'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
            })
    }
}