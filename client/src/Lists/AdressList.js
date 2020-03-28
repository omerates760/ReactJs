import React, { Component } from 'react'
import { getList, addItem, deleteItem, updateItem } from './AdressListFunctions'
class AdressList extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            customer_id:'',
            type: '',
            adress: '',
            city:'',
            arttitle: '',
            artbody: '',
            editDisabled: false,
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState(
                {
                    customer_id:'',
                    type: '',
                    adress:'',
                    city:'',
                    items: [...data]
                    
                },
                () => {
                    console.log(this.state.items)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addItem(this.state.customer_id,this.state.type,this.state.adress,this.state.city).then(() => {
            this.getAll()
        })
        this.setState({
            customer_id:'',
            type: '',
            adress:'',
            city:''
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.customer_id,this.state.type,this.state.adress,this.state.city,this.state.id).then(() => {
            this.getAll()
        })
        this.setState({
            editDisabled: ''
        })
        this.getAll()
    }

    onEdit = (itemid, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) => {
            if (item.id === itemid) {
                this.setState({
                    id: item.id,
                    customer_id:item.customer_id,
                    type: item.type,
                    adress:item.adress,
                    city:item.city,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

	    var data = [...this.state.items]
        data.filter(function(item, index) {
            if (item.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
   
    }

    render() {
        return (
            <div className="container">
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ 'margin': "50px 0px 50px 0" }}>
                    <label htmlFor="customer_id">Müşteri ID</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customer_id"
                                    name="customer_id"
                                    value={this.state.customer_id || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div> 
                        <label htmlFor="type">Adres Tipi</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    value={this.state.type || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div>
                        <label htmlFor="adress">Adres</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="adress"
                                    name="adress"
                                    value={this.state.adress || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div> 
                        <label htmlFor="city">Şehir</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={this.state.city || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div> 
                     
                    </div>
                    {!this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onSubmit.bind(this)}
                            className="btn btn-success btn-block">
                            Submit
                        </button>
                    ) : (
                        ''
                    )}
                    {this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onUpdate.bind(this)}
                            className="btn btn-primary btn-block"
                        >
                            Update
                        </button>
                    ) : (
                        ''
                    )}
                </form>
                <div className="row justify-content-md-center">
                        {this.state.items.map((item, index) => (
                            <div className="col-md-3 card card-style" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.type}</h5>
                                    <p className="card-text">{item.adress}</p>
                                    <p className="card-text">{item.city}</p>
                                    <p className="card-text">{item.customer_id}</p>

                                    <button
                                        href=""
                                        className="btn btn-info mr-1"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this,
                                            item.id
                                        )}
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        href=""
                                        className="btn btn-danger"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(
                                            this,
                                            item.id
                                        )}
                                    >
                                        Sil
                                    </button>
                                </div>
                            </div>
                         
                        ))}
                </div>                
            </div>
         </div>    
        )
    }
}

export default AdressList
