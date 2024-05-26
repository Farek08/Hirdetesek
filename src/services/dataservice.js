import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:5000/api';

export default {
    getKategoriak(){
        return Axios.get('/kategoriak')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    getIngatlanok(){
        return Axios.get('/ingatlan')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    saveIngatlan(ingatlan){
        return Axios.post('/ujingatlan', ingatlan)
        .then((resp) => {
            console.log(resp.data)
            return resp.data
        })
        .catch((err) => {
            return Promise.reject(err)
        })
    }
}