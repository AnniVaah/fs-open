import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
    const request = axios.get(baseUrl+'/api/all')
    return request.then(response => response.data)
}

const getOne = (id) => {
    //console.log("GetOne saa tämän:",id)
    const request = axios.get(baseUrl+'api/name/'+id)
    //console.log("request",request)
    const rqdata=request.then(response => response.data)
    //console.log("rqdata",rqdata)
    return(rqdata)
}
/* 
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, updatedObject) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedObject)
    return request
        .then(response => response.data)
}

const deleteOne = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
} */
export default {getAll, getOne/* , create, update, deleteOne */} 