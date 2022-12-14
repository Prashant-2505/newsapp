import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newsitems from './Newsitems'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';
import '../App.css';

// whenever we are using state always keep instail value in it
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    

  

const updateNews = async ()=>
{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=1&pageSize=${props.pageSize}&category=${props.category}`
   setloading(true )
    let data = await fetch(url);
     props.setProgress(30);
    let parseddata = await data.json()
     props.setProgress(70);
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
     props.setProgress(100);
}

  useEffect(  ()=>{
     document.title = props.category
   updateNews()
  },[])
    


    // handelPrevious = async () => {


    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page - 1}&pageSize=${props.pageSize}&category=${props.category}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parseddata = await data.json()



    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseddata.articles,
    //         loading: false
    //     })
    // }

    // handelNext = async () => {

    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {

    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${this.state.page + 1}&pageSize=${props.pageSize}&category=${props.category}`
    //         this.setState({ loading: true })
    //         let data = await fetch(url)
    //         let parseddata = await data.json()


    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parseddata.articles,
    //             loading: false

    //         })
    //     }
    // }



    const fetchMoreData = async () => {
       setpage(page + 1 )
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=744b07f1cad1423c8569037be22d6c89&page=${page}&pageSize=${props.pageSize}&category=${props.category}`
        let data = await fetch(url)
        let parseddata = await data.json()

        setarticles(articles.concat(parseddata.articles))
        settotalResults(parseddata.totalResults)
    

    };



    {
        return (

            <>
                <h2 className='text-center my-5' style={{margin:'40px 0px'}}>News-Monster top headline</h2>
                {loading && <Spinner />}

                <InfiniteScroll className='my-3'
                    dataLength={articles.length}
                    next={fetchMoreData}
                    inverse={false} //
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="container">


                        <div className="row">
                            {articles.map((element) => {
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




News.defaultProps =
{
    country: 'in ',
    pageSize: 1,
    category: 'general'
}

News.propTypes =
{
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
