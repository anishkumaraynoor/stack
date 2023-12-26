import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';






function Add({updateData}) {
  const [inputDatas,setInputDatas] = useState({
    title:"", coverImg:"", videoUrl:"", id:""
  })
  const [show, setShow] = useState(false);

  const setData=(e)=>{
    let {value, name} = e.target
    setInputDatas({...inputDatas,[name]:value})
  }

  const extractUrl=(e)=>{
    let {value, name} = e.target
    const urlCode = value.slice(-11,)
    const finalURL = `https://www.youtube.com/embed/${urlCode}?autoplay=1`
    setInputDatas({...inputDatas,[name]:finalURL})
  }

  console.log(inputDatas);

  const handleClose = () => {
    setShow(false)
    setInputDatas({title:"", coverImg:"", videoUrl:"", id:""})
  }
  const handleShow = () => setShow(true);


  
  const handleAdd = async (e)=>{
    e.preventDefault()
    const {title, coverImg, videoUrl} = inputDatas
    if(!title || !coverImg || !videoUrl){
      toast.error('please fill all datas', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      const result = await addVideoApi(inputDatas)
      if(result.status >=200 && result.status <300){
        //update state with added data
        updateData(result.data)
        toast.success('video added successfully!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        handleClose()
      }
    }
    
  }
  return (
    <div>
        <b onClick={handleShow} style={{ borderRadius: '20px', border:'1px solid red'}} className='btn text-warning bg-black fs-3'><span><i class="fa-solid fa-upload fa-2x fa-bounce"></i></span>Upload</b>
        <Modal className='my-modal' show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name='title' onChange={(e)=>setData(e)} type="text" placeholder="Video Caption" 
              autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name='coverImg' onChange={(e)=>setData(e)} type="text" placeholder="Cover Image URL" 
              autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name='videoUrl' onChange={(e)=>extractUrl(e)} type="text" placeholder="YouTube Video URL" 
              autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e)=>handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer />
    </div>
  )
}

export default Add