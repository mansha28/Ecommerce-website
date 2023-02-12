import React from "react"

export default function Head () {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 11111-22222</label>
            <i className='fa fa-envelope'></i>
            <label> support@ecommerce.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ"s</label>
            <label>Help</label>
            <span><i class="fa-brands fa-font-awesome"></i></span>
            <label>EN</label>
            <span>₹ </span>
            <label>INR</label>
          </div>
        </div>
      </section>
    </>
  )
}

