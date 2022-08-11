import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component"

export class NewsComp extends Component {
  constructor() {
    super();
    console.log("constructor made in News component");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48eabfa34fc649fc841eed7eafe7ec5b&page=1`;
    console.log(url)
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: 1,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48eabfa34fc649fc841eed7eafe7ec5b&page=${this.state.page + 1}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }
  fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48eabfa34fc649fc841eed7eafe7ec5b&page=${this.state.page + 1}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      loading: false,
      totalResults: parsedData.totalResults
    });
    console.log(this.state.articles[0].publishedAt)
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <>

        <h1 className="text-center" style={{marginTop:'90px'}}>Top HeadLines - {this.capitalizeFirstLetter(this.props.category)}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={< Loading />}>
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (

                  <div className="col-md-4" key={element.url}>
                    {<NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsurl={element.url}
                      publishedAt={element.publishedAt}
                    />}
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>


      </>
    );
  }
}

export default NewsComp;
