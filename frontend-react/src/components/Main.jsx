import React from 'react'

const Main = () => {
  return (
      <>
          <div className='container'>
              <div className='contentBox p-5'>
                  
                  <h1 className='mb-4'>Stock Prediction Portal</h1>
                  <h3>Where have you heard about a stock market prediction?</h3>
                  <p className='lead'>Of course, every investor wants to predict the future value of stocks, so there is no shortage of stock market predictions by self-styled experts in the media and published by brokers and investment advisors. U.S. cable channels such as CNBC have made an entire industry out of these predictions.</p>

                  {/* <h3 >What you need to know about a stock market prediction.</h3>
                  <p className='lead'>There are two common methods of attempting to forecast stock prices. The first is fundamental analysis, which is broken down into ‘bottom-up’ and ‘top-down’ analyses.
                      Bottom-up evaluates a company’s performance using indicators such as price/earnings (P/E) ratio, whilst top-down starts with the overall economy and predicts how it will affect individual stocks.
                      The second is technical analysis, which attempts to find patterns in charts and use past price trends to predict future price action.
                  </p> */}
              
                 <a href="" className='btn btn-outline-info'>Login</a>
              </div>
          </div>
    </>
  )
}

export default Main