import React from 'react'
import main from '../assets/images/landing img.svg'
import Wrapper from '../assets/wrappers/LandingPageStyle'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
                
            </nav>
            <div className="container page">
                <div classname="info">
                    <h1>
                        Welcome to <span>Tech Planet</span>
                    </h1>
                    <p>
                        Tech Planet is a prestigious tech – store based in Colombo, Sri Lanka.<br/>
                        We offer you a wide range of computer parts, computer supplies, PC hardware, software, accessories and offer many more high quality innovative products for reasonable prices while providing the best customer service.
                    </p>

                    <Link to="/register"  className = 'btn btn-hero'>Login / Register</Link>
                </div>

                <img src={main} alt="computer" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing


