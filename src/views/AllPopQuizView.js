import React from 'react'
import HeadingComponent from '../components/HeadingComponent.js'
import '../assets/CSS/allpopquizStyle.css'
import FrameComponent from '../components/FrameComponent'

function AllPopQuizView() {
  const heading = [
    {
      id:"1",
      name: "1. What does a circular road sign with a red border and a white center indicate?",
    },
    {
      id:"2",
      name: "2. Who can apply for driving license?",
    },
    {
      id:"3",
      name: "3. What are the ways to apply License?",  
    },
    {
      id:"4",
      name: "4. Sample heading",  
    },
    {
      
      id:"5",
      name: "5. Sample heading",
    }
]

  return (
    <FrameComponent>
    <div className=' courseview p-0 container-fluid'>
      <div className='d-flex m-0 flex-row justify-content-center'>
        
        <div className='col-lg-11 col-md-11 col-12 container'>
          <div  className='flex-shrink-1 flex-grow-1' >
            <div  className='courseHeading mt-3 mb-3  shadow-sm  p-3  container rounded-3   justify-content-center'>
                <div >
                  <div className=' text-center row'>
                    <h5 className=' PageHeading' >Handle Study Materials</h5>
                    <h5 className='' >All Pop Quizzes</h5>
                  </div>
                </div>
            </div>
            {heading.map((item) =><HeadingComponent key={item.name} heading={item} /> )}
          </div>
          <div className='buttonstyles'>
            <button type="button" class="btn btn-primary btn-circle btn-md" onClick={()=>alert("Add button clicked!")}><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
      </div>
    </div>
    </FrameComponent>
  )
}

export default AllPopQuizView