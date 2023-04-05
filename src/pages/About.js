import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function About() {
    const [user, setUser] = useState('Jett')

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="About">
            <h2>About Us</h2>
            <p>Our mission is to help you find the job of your dreams with ease and convenience. We know that job hunting can be challenging, and that is why we have created a platform that is both efficient and effective. We offer a wide range of tools and resources to help you find the perfect job, from personalized job alerts to expert career advice.</p>
            <p>At Jobify, we are dedicated to providing you with the best possible experience on our platform. Our team of experts is constantly updating our job listings to ensure that you have access to the latest job opportunities in your field. We believe in the power of technology to connect job seekers with employers, and we are proud to offer a state-of-the-art platform that is easy to use and navigate. With Jobify, you can take your career to new heights.</p>
            <p>Our commitment to our users extends beyond just helping you find a job. We are also here to provide support and guidance throughout your job search journey. From resume writing tips to interview coaching, we offer a wide range of resources to help you succeed. Our ultimate goal is to empower you with the knowledge and tools you need to land your dream job. Thank you for choosing Jobify, and we look forward to helping you achieve your career goals.</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}