function Footer() {
    return (
        <div>
            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            <h3>ABOUT ME</h3>
            <div className="row mt-3">
                <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                    
                    <p>
                       I am an aspirant programmer fond of designing and creating web application with MERN stack.
                   </p>
                    <ul className="list-inline" style={{display:"flex",justifyContent:"space-around",textAlign:"center",fontSize:'30px'}}>
                        <li className="list-inline-item">
                            <a href="/" style={{ color: '#2c9be6' }}>
                                <i className="fab fa-facebook" ></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/Nabujjal-Nath" style={{ color: '#2c9be6' }}>
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" style={{ color: '#2c9be6' }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/nabujjal-nath-9729681b0" style={{ color: "#2c9be6" }}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="col-md-4 col-sm-6" style={{ color: "#2c9be6" }}>
                    <h3>CONTACT</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt"></i> Address:
                                </strong>{" "}
                               Silchar, Assam, India
                           </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-mobile-alt"></i> Phone:
                               </strong>{" "}
                                  (+91) 7086827208        
                             </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-envelope"></i> Email:
                                </strong>{" "}
                                   nabujjal@gmail.com
                           </p>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="col-md-4 col-sm-6" 
            style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'40px',paddingLeft:'60px'}}>
            MovieApp &copy;2021, All Rights Reserved</p>
        </div>
    )
}

export default Footer;