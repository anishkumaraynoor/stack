import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryApi, deleteCategoriesApi, getCategoriesApi } from '../apiService/allApis';
import { Col, Row } from 'react-bootstrap';

function Categories() {
  const [inputDatas, setInputDatas] = useState({
    title: "", videos: [], id: ""
  })
  const [allCategories, setAllCategories] = useState([])
  const [show, setShow] = useState(false);

  const setData = (e) => {
    let { value, name } = e.target
    setInputDatas({ ...inputDatas, [name]: value })
  }

  const accessAllCategories = async () => {
    const result = await getCategoriesApi()
    setAllCategories(result.data)
  }

  const handleClose = () =>{
    setShow(false)
    setInputDatas({title: "", videos: [], id: ""})
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    accessAllCategories()
  }, [])

  console.log(allCategories);

  const handleAdd = async (e) => {
    e.preventDefault()
    const { title } = inputDatas
    if (!title) {
      toast.error('please fill data', {
        position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
      });
    } else {
      const result = await addCategoryApi(inputDatas)
      if (result.status >= 200 && result.status < 300) {
        await accessAllCategories()
        toast.success('category added successfully!', {
          position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
        });
        handleClose()
      }
    }

  }

  const deleteCategory=async(e,id)=>{
    e.preventDefault()
    const result = await deleteCategoriesApi(id)
    accessAllCategories()
  }



  return (
    


      <Row className='pb-5'>
        <div className='mt-5 pb-5 px-4' style={{border:'solid 1px grey'}}>
        <div className='d-grid pt-5 mb-3'>
          <button onClick={handleShow} style={{ border: '1px solid red' }} className='btn text-warning fs-5'>Add Category</button>
        </div>
        {
          allCategories?.length > 0 ?
            allCategories?.map(i => (
              <Col lg={12} md={12}>
                <div className='p-4 my-1 d-flex' style={{ alignItems:'center', border: '2px solid white', backgroundColor: '#520600', height: '20px', borderRadius: '20px' }}>
                  <i onClick={(e)=>deleteCategory(e,i?.id)} style={{display:'inline-block', marginRight:'25px', color:'white'}} class="fa-solid fa-trash"></i> <h5 style={{display:'inline-block'}} className='text-white'>{i.title}</h5>
                </div>
              </Col>
            ))
            : <h1>No Categories Added</h1>

        }

        </div>
        

<Modal className='my-modal' show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name='title' onChange={(e) => setData(e)} type="text" placeholder="Category Name"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer />




      </Row>





      
    
  )
}

export default Categories