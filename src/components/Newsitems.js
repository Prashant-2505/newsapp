import React, { Component } from 'react'

export class Newsitems extends Component {
 
 

    render() {

     let  {title,description,imgurl,newsurl,author,publishedAt}=this.props

        return (
        
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author}</small></p>
                            <p className="card-text"><small className="text-muted">Last updated {new Date(publishedAt).toGMTString()} mins ago</small></p>

                            <a href={newsurl} target="_blank" className="btn btn-sm btn-success">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
