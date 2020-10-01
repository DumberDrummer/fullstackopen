import axios from 'axios'
const baseurl = `http://localhost:3001`
const collection = `persons`
const GetAll = ()=>{
    return (axios
    .get(`${baseurl}/${collection}`)
    .then(res=>res.data)
    )
}
const AddPerson= (person) =>{
    return (axios
        .post(`${baseurl}/${collection}`,person)
        .then(res=>res.data)
        )
}
const Remove = (personID) =>{
    return(
        axios
        .delete(`${baseurl}/${collection}/${personID}`)
        .then(res=>res.data)
    )
}
const Update = (ID,updatedperson) =>{
    return(
        axios
        .put(`${baseurl}/${collection}/${ID}`,updatedperson)
        .then(res=>res.data)
    )
}

export default {GetAll,AddPerson,Remove,Update}