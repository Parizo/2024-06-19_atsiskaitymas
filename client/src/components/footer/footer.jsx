import React from "react"
import '../footer/footer.css'



export const Footer = () => {

    return (
        <>
      <footer>
        <div className='footerContainer'>
          <div className="copyOne">
            <p className="CopyRight">Copyright &copy;2024; Sukurta <span className='designer'>Andrius Malikėnas</span></p>
          </div>
          <div className='socialIcons'>
            <a href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
            
            <a href="https://x.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
            
            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-youtube"></i></a>
          </div>

        </div>
      </footer>
    </>
    )
}