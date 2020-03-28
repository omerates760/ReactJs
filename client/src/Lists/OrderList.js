import React, { Component } from 'react'
import { getList } from '../ListFunctions'

import { getListOrder, addItemOrder, deleteItemOrder } from './OrderListFunctions'
class OrderList extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            customer_id: '',
            product_id: '',
            total: '',
            customer_adress: '',
            name: '',
            title: '',
            price: '',
            arttitle: '',
            artbody: '',
            editDisabled: false,
            items: [],

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
                    customer_id: '',
                    product_id: '',
                    total: '',
                    customer_adress: '',
                    name: '',
                    title: '',
                    price: '',
                    items: [...data]

                },
                () => {
                    console.log(this.state.items)
                }
            )
        })

    }
    ////////////////////////////
    //Static CUSTOMER_ID -> 1
    ///////////////////////////
    onSubmit = e => {
        e.preventDefault()
        addItemOrder(this.state.customer_id, this.state.product_id, this.state.customer_adress, this.state.total).then(() => {
            this.getAll()
        })
        this.setState({
            customer_id: '',
            product_id: '',
            total: '',
            customer_adress: '',
            name: '',
            title: '',
            price: '',


        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItemOrder(val)

        var data = [...this.state.items_data]
        data.filter(function (item, index) {
            if (item.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })

    }
    onEdit = (itemid, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) => {
            if (item.id === itemid) {
                this.setState({
                    customer_id: item.customer_id,
                    product_id: item.product_id,
                    total: item.total,
                    customer_adress: item.customer_adress,
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12">

                    <div className="row justify-content-md-center">

                        {this.state.items.map((item, index) => (

                            <div className="col-md-3 card card-style" key={index}>
                                <div className="card-body">

                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text">{item.price} ₺</p>
                                    <form onSubmit={this.onSubmit}>


                                        {!this.state.editDisabled ? (
                                            <button type="submit"
                                                class="btn btn-primary"
                                                onClick={this.onSubmit.bind(this)} className="btn btn-dark btn-block"
                                                data-toggle="modal" data-target="#exampleModal">
                                                Listeye Ekle
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
                                                Güncelle
                                            </button>
                                        ) : (
                                                ''
                                            )}


                                    </form>

                                </div>
                            </div>

                        ))}

                    </div>

                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Sipariş Listesi</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div class="alert alert-danger" role="alert">
                                        Bu sayfa düzenlenecektir.
</div>
                                    {this.state.items.map((item, index) => (
                                        <div className="col-md-12 card" key={index}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-2">

                                                        <img src="../img/prod.jpg" class="img-thumbnail" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5 className="card-title">{item.title}</h5>

                                                    </div>
                                                    <div className="col-md-2">
                                                        <p className="card-text">{item.name}</p>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <p className="card-text">{item.price}</p>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <p className="card-text">{item.total}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button
                                                            href=""
                                                            className="btn btn-danger"
                                                            disabled={this.state.editDisabled}
                                                            onClick={this.onDelete.bind(
                                                                this,
                                                                item.id
                                                            )}>
                                                            Listeden Çıkart
                                        </button>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    ))}

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success"
                                        data-dismiss="modal">Alışverişe Devam Et</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList
