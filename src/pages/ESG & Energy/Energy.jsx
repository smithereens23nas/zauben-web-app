import React from 'react'
import "./Energy.css"
import EnergyDateNav from '../../components/EnergyDateNav/EnergyDateNav'

const Energy = () => {
  return (
      <div className='energy-page-bg'>
    <div className='energy-title-container'><h2>ESG & Energy</h2></div>
    < EnergyDateNav />
    <div className='energy-savings-container'>
      <div className='energy-title'>  <h3>Energy Savings</h3></div>
      <div className='savings-items'>
          <h4 className='energy-item'><span>75%</span>AC Savings</h4>
          <h4 className='energy-item'><span>25%</span>Heat Savings</h4>
          <h4 className='energy-item'><span>11%</span>Gas Savings</h4>
          <h4 className='energy-item'><span>2%</span>Electric Savings</h4>
          </div>

        </div>
        <div className='est-savings-container'><h3>Estimated Savings</h3></div>
</div>
  )
}

export default Energy