import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {




    constructor() {

        super();
        console.log(" i m constructor from news components")
        this.state =
        {
            articles: [],
            loading: false,
            page: 1,
            pagesize: 20
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=744b07f1cad1423c8569037be22d6c89&page=1&pageSize=20"
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults })
    }


    handelPrevious = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)


        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles
        })
    }

    handelNext = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url)
            let parseddata = await data.json()
            console.log(parseddata)

            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles

            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News-Monster top headline</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitems title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between py-3">
                    <button disabled={this.state.page <= 1} type='button' className="btn btn-success" onClick={this.handelPrevious}>Prev</button>
                    <button type='button' className="btn btn-success" onClick={this.handelNext}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
