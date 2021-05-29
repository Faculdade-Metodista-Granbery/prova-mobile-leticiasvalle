import firebase from '../services/firebase';

const cerateFirebase = () => {
    return firebase.getAll();;
} 

const createDatabaseService = (service) => {
    if(service === 'firebase') {
        return cerateFirebase();
    }
}

export default {
    createDatabaseService
}