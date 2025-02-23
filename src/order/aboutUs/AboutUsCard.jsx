import React from 'react'

const AboutUsCard = ({img, par}) => {
  return (
    <div id='about-us-card'>
      <img src={img} alt="About Us" />
      <p>{par}</p>
      <button>Explore More</button>
    </div>
  )
}

export default AboutUsCard