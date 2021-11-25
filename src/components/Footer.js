import React from 'react'
import "../App.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="subFooter1">
                <span><img src="/images/frame.png" alt="" /></span>
                <p>Edufu stands for education and future. We aim to provide mutual benefits to the students, institutions, companies, and job seekers. Edufu doesn't exist for its own sake, but for yours.</p>
                <div className="icons">
                    <span><img src="/images/Twitter.png" alt="" /></span>
                    <span><img src="/images/Facebook.png" alt="" /></span>
                    <span><img src="/images/instagram.png" alt="" /></span>
                    <span><img src="/images/in.png" alt="" /></span>
                </div>
            </div>
            <div className="subFooter2">
                <div className="footerList1">
                    <h3>SERVICES</h3>
                    <p>Students</p>
                    <p>Institute</p>
                    <p>Company</p>
                </div>
                <div className="footerList2">
                    <h3>DOCUMENTATION</h3>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Disclamer</p>
                    <p>Refund Policy</p>
                </div>
                <div className="footerList3">
                    <h3>CONTACT US</h3>
                    <p>Edufu Technologies Pvt. Ltd.</p>
                    <p>www.Edufu.in</p>
                    <p>Admin@Edufu.in</p>
                    <p>25, 1st main road, KB nagar, Bengaluru, karnataka 560026</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
