import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps ={
    country:'in',
    pageSize:8,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }
  articles=[
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Press Trust of India",
            "title": "Team India Stuck In Barbados Due To Hurricane Beryl: Report - NDTV Sports",
            "description": "Indian cricket fans might have to wait a little longer to see their T20 World Cup-winning heroes back in the country as the Rohit Sharma-led side's travel plans have been impacted by a hurricane at Bridgetown, Barbados.",
            "url": "https://sports.ndtv.com/t20-world-cup-2024/indian-cricket-teams-return-after-t20-world-cup-triumph-disrupted-by-hurricane-6000630",
            "urlToImage": "https://c.ndtvimg.com/2024-06/dgv961a_kohli-hardik-afp_625x300_30_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2024-06-30T17:41:05Z",
            "content": "After a grueling month-long T20 World Cup, the Indian cricket team, led by Rohit Sharma, is in the midst of celebrating their glorious victory in Barbados as Hurricane Beryl, a Grade 3 hurricane, app… [+1229 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'Aura will stay forever': BCCI pays heartfelt tribute to Rohit Sharma, Virat Kohli on T20I retirement - The Times of India",
            "description": "Cricket News: The Board of Control for Cricket in India (BCCI) expressed its deep appreciation for the contributions of two giants in Indian cricket history, Rohit",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/aura-will-stay-forever-bcci-pays-heartfelt-tribute-to-rohit-sharma-virat-kohli-on-t20i-retirement/articleshow/111383648.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-111383610,width-1070,height-580,imgsize-81614,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-06-30T13:35:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Sehwag in disbelief, Karthik calls 'greatest' in final: How cricketers reacted to Suryakumar Yadav's magnificent catch - Hindustan Times",
            "description": "Suryakumar Yadav produced a brilliant fielding effort to help dismiss David Miller in the T20 World Cup final. | Crickit",
            "url": "https://www.hindustantimes.com/cricket/sehwag-in-disbelief-karthik-calls-greatest-in-final-how-cricketers-reacted-to-suryakumar-yadavs-magnificent-catch-101719744124431.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/30/1600x900/ANI-20240630179-0_1719749403195_1719749425021.jpg",
            "publishedAt": "2024-06-30T12:12:38Z",
            "content": "Suryakumar Yadav produced a game-changing moment in the final over of the T20 World Cup final against South Africa, taking the incredible catch of David Miller on the first ball that tilted the balan… [+2461 chars]"
        }
    ]
  

   capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
      totalResults:0,
      
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
// now hmne na ek function ban liya hai sbke liye 
// for prev and next dono k liye and uska y ki bhai ab muje baarbaar -1 +1 nhi krna pdega ise kya hoga ki
// ab jb m api k andhr set krdu this.state.page iska mtkb hai ki jb m s function ko call krugi 
// apne function m toh vo automatically us cheez ko kredega jb m apne vo +1 , -1 ka likdugi
  async updateNews(){
    this.props.setProgress(0);
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fee10dfba3e42d89b42d63b1ebb07de&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url); // fetch api wait krskhta hai till promise ko resolve krne ka
     let parsedData = await data.json();
     console.log(parsedData);
     this.props.setProgress(50);
     this.setState({ articles: parsedData.articles , 
      totalResults:parsedData.totalResults
    });
    this.props.setProgress(100);

  }



  // componentDidMount is basically a lifeCycle
  // isme hm na articles se news larhe hai
  async componentDidMount() {
   this.updateNews();
  }
    
   handlePrevClick =async () =>{
    
    this.setState({page: this.state.page - 1})
    this.updateNews();
    }

        
   
    handleNextClick =async () =>{
   this.setState({page: this.state.page + 1});
   this.updateNews();

}
    
  fetchMoreData = async() =>{
    this.setState({page:this.state.page+1})
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fee10dfba3e42d89b42d63b1ebb07de&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url); // fetch api wait krskhta hai till promise ko resolve krne ka
     let parsedData = await data.json();
     console.log(parsedData);
     this.props.setProgress(50);
     this.setState({ 
      articles: this.state.articles.concat(parsedData.articles) , 
      totalResults:parsedData.totalResults
    });
  }
  
  render() {
    return (
      <div className="container my-4 px-2 ">
        <h1 className="text-center" style ={{margin: '35px 0px', marginTop:'90px'}}>
          NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>

          <InfiniteScroll
          dataLength ={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
          >

          <div className="container">
          <div className="row">
             {this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 80) : ""} // sbko m element m
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
           })}
           </div>
           </div>
          </InfiniteScroll>
           <div className="container d-flex justify-content-between">
           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
           <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div>

        
      </div>
    );
  }
}

export default News;
//ab m na apne jo content hai use km show krugi by using slice

//element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""}
// y hmne jo likha hai uska mtlb hai ki agr mera element.title null hai toh"" blank m chle jao
// and same agr vo blank nhi hai toh bhai print krdo
// same description k sth agr nullhai "" y krdo agr nhi hai print krdo
// imageUrl={element.urlToImage} // hmne saari images ko daaldiya hai as urlToIage is basiclly javascript
//newsUrl={element.url} // basically this is for the readmore as newsUrl is
// javascript toh hm use likheg
// disabled means ki like kinda bhai agr mera previous pr ab koi bhi ho and then 
// kinda agr nhi hoga element toh bhai vi use disable krdegi 

// now here hm baat krege hmre updateNews ki 
// basiaclly hm hm api se data ko lete hai 
// fir data ka wait krte hai hm fetch krte hai url se and then data ko lete hai
// fir data ko json m convert krne ka wait krte hai 
// fir hm state ko set krte hai   

// ab basically hm na hmre jo top heading hai use change krdiya hmne why adding capataize function and category init
