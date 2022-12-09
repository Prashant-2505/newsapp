import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {

    article = [{
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "England bat first against Pakistan in second Test - radio & text",
        "description": "Follow live text updates and BBC Test Match Special commentary from the opening day of the second Test between England and Pakistan at the Multan Cricket Stadium.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/62865927",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2022-12-09T05:07:28.2096551Z",
        "content": "So three changes for Pakistan including a debut for leg spinner Abrar Ahmed. Faheem Ashraf and Zahid Mahmood also come in with Haris Rauf, Azhar Ali and Naseem Shah dropping out.\r\nEngland had already… [+545 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }]


    constructor() {

        super();
        console.log(" i m constructor from news components")
        this.state =
        {
            article: this.article,
            loading: false
        }
    }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=744b07f1cad1423c8569037be22d6c89"
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({article: parseddata.articles})
}

    render() {
        return (
            <div className="container my-3">
                <h2>News-Monster top headline</h2>

                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitems  title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url}  />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
