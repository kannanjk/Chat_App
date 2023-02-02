import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Signup.css"
import botImg from "../assets/bot.png"

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

    // image upload state
    const [image,setImage]=useState(null)
    const [uploadingIMG,setUploadingIMG]=useState(false)
    const [imagePreview,setImagePreview]=useState(null)

  function validateImg(e) {
    const file= e.target.files[0]
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb")
    }else{
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

 async function uploadImage(){
  const data = new FormData()
  data.append('file',image)
  data.append('upload_preset','y9tpehhd')
  try{
    setUploadingIMG(true)
    let res=await fetch('http://api.cloudinary.com/v1_1/dxzt4brja/image/upload',{
      method:'post',
      body:data
    })
    const urlData = await res.json()
    return urlData.url
  }catch(e){
    setUploadingIMG(false)
    console.log(e);
  }
  }

 async function handilSignup(e){
    e.preventDefault();
    if(!image)return alert('Please upload your profile picture')
    const url=await uploadImage(image)
    console.log(url);
    // signup user
  }


  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handilSignup} >
            <h1 className='text-center'>Create account</h1>
            <div className='signup-profile-pic__container'>
              <img src={imagePreview || botImg} className='signup-profile-pic' alt="" />
              <label htmlFor="image-upload" className='image-upload-label'>
                <i className='fas fa-plus-circle add-pictur-icon'></i>
              </label>
              <input type="file" id='image-upload' hidden accept='image/ppng,image/jpeg' onChange={validateImg} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="your name..." onChange={(e)=>setName(e.target.value)} value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email..." onChange={(e)=>setEmail(e.target.value)} value={email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingIMG ? "Signing you up..." : "Signup"}
            </Button>
            <div className='py-4'>
              <p className='text-center'>
                Don't have an account ?  <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  )
}

export default Signup