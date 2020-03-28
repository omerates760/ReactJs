import axios from 'axios'
export const getList = () => {
    return axios
        .get('http://localhost:8000/api/employes', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (name,email,phone) => {
    return axios
        .post(
            'http://localhost:8000/api/employes',
            {
                name: name,
                email:email,
                phone:phone,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}
export const deleteItem = id => {
    axios
        .delete(`http://localhost:8000/api/employes/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}
export const updateItem = (name,email,phone,id) => {
    axios
        .put(`http://localhost:8000/api/employes/${id}`,
        {
            name: name,
            email:email,
            phone:phone,
            
        },
        {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}