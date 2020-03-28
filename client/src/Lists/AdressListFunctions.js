import axios from 'axios'
export const getList = () => {
    return axios
        .get('http://localhost:8000/api/adress', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (customer_id,type,adress,city) => {
    return axios
        .post(
            'http://localhost:8000/api/adress',
            {
                customer_id:customer_id,
                type: type,
                adress: adress,
                city:city
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
        .delete(`http://localhost:8000/api/adress/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}
export const updateItem = (customer_id,type,adress,city,id) => {
    return axios
        .put(
            `http://localhost:8000/api/adress/${id}`,
            {
                customer_id:customer_id,
                type: type,
                adress:adress,
                city:city,
           
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}