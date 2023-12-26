import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideosApi } from '../apiService/allApis'
import { Col, Row } from 'react-bootstrap'




function Videos({data}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteUpdate, setDeleteUpdate] = useState({})
  const accessAllVideos = async ()=>{
    const result = await getVideosApi()
    setAllVideos(result.data)
  }
  useEffect(()=>{
    accessAllVideos()
  },[data, deleteUpdate])
  console.log(allVideos);
  return (
    
      <Row>
      {
          allVideos?.length>0?
          allVideos?.map(i=>(
            <Col lg={4} md={6} style={{height:'300px'}}>
            <VideoCard deleteData={setDeleteUpdate} video={i}></VideoCard>
            </Col>
            
          ))
          : <h1>No videos added yet.  Add a new video.</h1>
        }

      </Row>
        
   
  )
}

export default Videos