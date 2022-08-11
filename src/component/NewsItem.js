import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor() {
    super()
    console.log('constructor made in News item')
  }
  render() {
    let { title, description, imageUrl, newsurl, publishedAt } = this.props
    function dateshow(datestr) {
      let temp = datestr.split('T')
      let date = temp[0]
      let time = temp[1]
      datestr = `Date: ${date} | Time: ${time.slice(0,8)}`
      return datestr
    }
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <strong><p className='card-text'>{dateshow(publishedAt)}</p></strong>
          <p className="card-text">{description}</p>
          <a href={newsurl} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem