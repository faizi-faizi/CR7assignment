import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsTrophyFill } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";

function Achievements() {
    return (
        <>
            <div className='container'>
                <h2 className='text-center my-4'>Achievements</h2>

                <div className='row'>
                <div className='col-md-4'>
                        <Card className='cards p-4'>
                        
                            <Card.Body className='text-center'>
                                <Card.Title><BsTrophyFill className='AchievemnetIcons text-warning' /></Card.Title>
                                
                                <Card.Text>
                                <h4>5 Ballon d'Or</h4>
                                   <p>Awarded for his outstanding football career.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cards p-4'>
                        
                            <Card.Body className='text-center'>
                                <Card.Title><IoStar  className='AchievemnetIcons text-primary' /></Card.Title>
                                
                                <Card.Text>
                                <h4>UEFA Champions League</h4>
                                   <p>Won 5 UEFA Champions League titles.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='cards p-4'>
                        
                            <Card.Body className='text-center'>
                                <Card.Title><FaCrown  className='AchievemnetIcons text-success' /></Card.Title>
                                
                                <Card.Text>
                                <h4>European Champion</h4>
                                   <p>Led Portugal to victory in Euro 2016.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Achievements;