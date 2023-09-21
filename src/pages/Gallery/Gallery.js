import React, { useState } from 'react'
import './Gallery.css';
import PageHeadCard from '../../components/pageHeadCard/PageHeadCard';
const Gallery = () => {

  const [allLogic,setAllLogic] = useState(false);
  const [weddingLogic,setWeddingLogic] = useState(false);
  const [enageLogic,setEngageLogic] = useState(false);
  const [preWeddingLogic,setPreWeddingLogic] = useState(false);

  return (
    <div className='gallery-main'>
      <div className='gallery_sub'>
      <PageHeadCard  title = "Gallery" />
      <section className='gallary_section_title'>

    <span className= {allLogic ? 'gallary_span  ' :'gallary_span' }
    
      onClick={ ()=>{

        setAllLogic(true);
        setWeddingLogic(false);
        setEngageLogic(false);
        setPreWeddingLogic(false);
      }}

    >ALL</span>
    <span className='gallary_span'
      onClick={ ()=>{

        setAllLogic(false);
        setWeddingLogic(true);
        setEngageLogic(false);
        setPreWeddingLogic(false);
      }}
    
    
    >WEDDINGS</span>
    <span className='gallary_span' 
      onClick={ ()=>{

        setAllLogic(false);
        setWeddingLogic(false);
        setEngageLogic(true);
        setPreWeddingLogic(false);
      }}
    
    >ENGAGEMENTS</span>
    <span className='gallary_span'
    
    onClick={ ()=>{

      setAllLogic(false);
      setWeddingLogic(false);
      setEngageLogic(false);
      setPreWeddingLogic(true);
    }}

    >PRE WEDDING SESSIONS</span>
      </section>

      </div>

    </div>
  )
}

export default Gallery
