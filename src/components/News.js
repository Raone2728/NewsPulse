import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    
     static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1 
        
        }
    }

  async  componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d86bb574f92439693b1754a8294e9c6&page=1&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        let convertdata=await data.json();
         this.setState({articles : convertdata.articles ,totalResults: convertdata.totalResults})
    }
    
    handleNextClick=async()=>{
        // if(this.state.pagw+1>Math.ceil(this.state))
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
                alert("no more page is avaiable");
        }else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.categ}&apiKey=b0a95bc691b748dcbba7fb2d9f370c3c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        let convertdata=await data.json();
         this.setState({articles : convertdata.articles,
                        page:this.state.page+1   
        })
    }
      
   }

   handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.categ}&apiKey=b0a95bc691b748dcbba7fb2d9f370c3c&page=${this.state.page-1}&pageSize=${this.props.pageSize} `
        let data= await fetch(url);
        let convertdata=await data.json();
         this.setState({articles : convertdata.articles,
                        page:this.state.page-1   
        })
        console.log('ok')
    
    
    }

    render() {

        return (
            <>
                <div className="container my-3">
                    <div className="my-4">
                        <h1 className="text-center" style={{margin:'40px 0px'}}>News Pulse-top Headlines</h1>
                     

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3"  key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} newsurl={element.url} />
                                </div>
                            })}
                        </div>
                         <div className="d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Prev</button> 
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

