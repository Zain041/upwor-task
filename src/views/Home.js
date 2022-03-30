import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import rightArrow from '../assets/svgs/arrow.svg'

const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                <div>
                    <p className='welcome-note'>
                        Welcome to Instagram!
                    </p>
                    <p className='welcome-note-subtext'>
                        Here’s a quick run-through on how to use our app.
                    </p>
                </div>
                <Link to='/steps'>
                    <Button className='continue-button'>
                        <span>
                            Tap to continue
                        </span>
                        <img src={rightArrow} alt="" />
                    </Button>
                </Link>

            </div>
        </>
    )
}
export default Home
