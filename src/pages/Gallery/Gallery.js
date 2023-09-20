import React from 'react'
import './Gallery.css';
import PageHeadCard from '../../components/pageHeadCard/PageHeadCard';
const Gallery = () => {
  return (
    <div className='gallery-main'>
      <div className='gallery_sub'>
      <PageHeadCard  title = "Gallery" />
      <section className='gallary_section_title'>

    <span>ALL</span>
    <span>WEDDINGS</span>
    <span>ENGAGEMENTS</span>
    <span>PRE WEDDING SESSIONS</span>
      </section>

      </div>

    </div>
  )
}

export default Gallery
