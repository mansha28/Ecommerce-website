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
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span><i class="fa fa-flag" aria-hidden="true"></i></span>
            <label>IND</label>
            <span><i class="fa fa-inr" aria-hidden="true"></i></span>
            <label>INR</label>
          </div>
        </div>
      </section>
    </>
  )
}

// export default Head
