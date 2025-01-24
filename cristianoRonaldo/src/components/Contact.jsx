import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contact(){
    return(
        <>
        <div className="container">
        <h2 className='text-center text-white mb-4'>Contact</h2>
       <div>
       <Form className='row'>
        <div className='col-md-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your Name" />
      </Form.Group>
      </div>
      <div className='col-md-6'>      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your Email" />
      </Form.Group>
      </div>
      </Form>
       </div>
       
      <FloatingLabel controlId="floatingTextarea2" label="Your Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '150px' }}
        />
      </FloatingLabel>
<div className='d-flex justify-content-center mt-3'>
     <Button variant="primary">Send Message</Button>
</div>
     

        </div>
        

        </>
    )
}

export default Contact;