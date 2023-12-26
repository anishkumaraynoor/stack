import React from 'react'

import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideosApi } from '../apiService/allApis';

function VideoCard({video, deleteData}) {
  const deleteVideo=async(e,id)=>{
    e.preventDefault()
    const result = await deleteVideosApi(id)
    await deleteData(result.data)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='videocard'>
        <Card className='mt-2' style={{height:'270px'}}>
      <Card.Img onClick={handleShow} variant="top" src={video?.coverImg} />
      <Card.Body>
        <Card.Title>
            <h5 className='text-center'>{video?.title}</h5>
        </Card.Title>
        <i onClick={(e)=>deleteVideo(e, video?.id)} className='text-end' class="fa-solid fa-trash"></i>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300px" src={video?.videoUrl} title="titles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard