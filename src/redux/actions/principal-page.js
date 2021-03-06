const SET_PRINCIPAL_VIDEO = 'SET_PRINCIPAL_VIDEO'
const SET_PRINCIPAL_TITLE = 'SET_PRINCIPAL_TITLE'
const SET_RESULT_LIST = 'SET_RESULT_LIST'
const SET_LOADING_FIREBASE = 'SET_LOADING_FIREBASE'

const actions = {
    setPrincipalVideoAction(url) {
        return {
            type: SET_PRINCIPAL_VIDEO,
            payload: url
        }
    },
    setPrincipalTitleAction(newTitle){
        return {
            type: SET_PRINCIPAL_TITLE,
            payload: newTitle
        }
    },
    setResultListAction(resultList){
        return {
            type: SET_RESULT_LIST,
            payload: resultList
        }
    },
    setLoadingFirebase(payload){
        return {
            type: SET_LOADING_FIREBASE,
            payload
        }
    }
}

export default actions;