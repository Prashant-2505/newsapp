import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

import Spinner from './spinner';

export class News extends Component {

    static defaultProps =
        {
            country: 'in ',
            pageSize: 1,
            category: 'general'
        }


    constructor(props) {

        super(props);
        this.state =
        {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = this.props.category
    }




    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json()

        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false,
        })
    }


    handelPrevious = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseddata = await data.json()



        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading: false
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



    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        let data = await fetch(url)
        let parseddata = await data.json()

        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
        })

    };



    render() {
        return (

            <>
                <h2 className='text-center'>News-Monster top headline</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll className='my-3'
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    inverse={false} //
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="container">


                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitems title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                
            </>
        )
    }
}

export default News
