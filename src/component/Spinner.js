import React, { Component } from 'react'
import load from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'><img src={load} alt="loading" /></div>
        )
    }
}

export default Spinner