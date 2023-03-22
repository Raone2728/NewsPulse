import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {tittle,description,imageurl,newsurl}=this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}
