import React from 'react'
import DateNav from '../../components/DateNav/DateNav'
import "./Energy.css"


const Energy = () => {
  return (
      <div className='energy-page-bg'>
    < DateNav />
    <div className='energy-title-container'><h2>ESG & Energy</h2></div>
    <div className='energy-savings-container'>
      <div>  <h3>Energy Savings</h3></div>
      <div className='savings-items'>
          <h4><span>75%</span>AC Savings</h4>
          <h4><span>25%</span>Heat Savings</h4>
          <h4><span>11%</span>Gas Savings</h4>
          <h4><span>2%</span>Electric Savings</h4>
          </div>

        </div>
        <div className='est-savings-container'><h3>Estimated Savings</h3></div>
</div>
  )
}

export default Energy