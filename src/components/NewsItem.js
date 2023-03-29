import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}</span>

                    <img src={imageurl} className="card-img-top" alt="..." />
    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {author ? author : "unknown"} on date {new Date(date).toGMTString()}</small></p>
                        <a rel="nonreferrer" href={newsurl} target="_blank" className="btn btn-dark">Go somewhere</a>

                    </div>
                </div>
            </>
        )
    }
}
