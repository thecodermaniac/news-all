import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComp extends Component {
  static propTypes = {}
  constructor() {
    super()
    console.log('constructor made in News component')
  }

  render() {
    return (
      <div className='container'>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="title" description="description" imageUrl='https://c.ndtvimg.com/2022-06/2dfriklg_sparkling-galaxy-240_625x300_23_June_22.jpg'/>
          </div>
          <div className="col-md-4">
            <NewsItem title="title" description="description" imageUrl='https://c.ndtvimg.com/2022-06/2dfriklg_sparkling-galaxy-240_625x300_23_June_22.jpg'/>
          </div>
          <div className="col-md-4">
            <NewsItem title="title" description="description" imageUrl='https://c.ndtvimg.com/2022-06/2dfriklg_sparkling-galaxy-240_625x300_23_June_22.jpg'/>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsComp