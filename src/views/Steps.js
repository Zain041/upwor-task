import React, { useState } from 'react'
import Post from '../components/post/Post'
import Stepper from '../components/Stepper/Stepper'
import firstImage from '../assets/images/firstImg.png'
import secondImage from '../assets/images/secondImg.png'
import thirdImage from '../assets/images/thirdImg.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Steps = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const setActive = (step) => {
        setCurrentStep(step)
    }
    return (
        <div>
            <Stepper
                color='#18aed6'
                fontSize='20px'
                fontColor="#18aed6"
                setActive={setActive}
                steps={[
                    {
                        content: () =>
                            <>
                                <Post
                                    image={firstImage}
                                    content="hello there guys"
                                />
                            </>
                    },
                    {
                        content: () =>
                            <>
                                <Post
                                    image={secondImage}
                                    content="Explore new types of content and interests ✅"
                                />
                            </>
                    },
                    {
                        content: () =>
                            <>
                                <Post
                                    image={thirdImage}
                                    content="Find new creators and watch funny videos 😂"
                                    Button={() =>
                                        <Link to='/'>
                                            <Button className='start-button'>
                                                Let’s get started!
                                            </Button>
                                        </Link>
                                    }

                                />
                            </>
                    },

                ]}
                currentStep={currentStep}
            />

        </div >
    )
}
export default Steps
