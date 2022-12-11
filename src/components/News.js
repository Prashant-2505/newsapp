import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

import Spinner from './spinner';

export class News extends Component {

static defaultProps =
{
   country: 'in ',
   pageSize: 1,
   category:'general'
}


    constructor() {

        super();
        console.log(" i m constructor from news components")
        this.state =
        {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()

        this.setState({ 
         articles: parseddata.articles,
         totalResults: parseddata.totalResults ,
         loading:false,
         author : parseddata.author
        })
    }


    handelPrevious = async () => {

     
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parseddata = await data.json()
        


        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading:false
        })
    }

    handelNext = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parseddata = await data.json()
          

            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center'>News-Monster top headline</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitems title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between py-3">
                    <button disabled={this.state.page <= 1} type='button' className="btn btn-success" onClick={this.handelPrevious}>Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className="btn btn-success" onClick={this.handelNext}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
