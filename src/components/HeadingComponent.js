import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/CSS/headingStyle.css'

function HeadingComponent({heading, type}) {

  return (
    <div style={{userSelect:'none'}} className='mt-3 p-0 mb-3 border border-1  shadow-sm   container rounded-3   justify-content-center'>
        <div 
          className={`p-3  rounded-3 pb-2  hover-effect`}
          >
          <div className=' text-start row pe-2'>
            <h5 className=' col-11 CourseHeading d-flex m-0 flex-row justify-content-between'>
              {heading.name}
              <div>
                <Link to={ type ==="quiz"?"/addquiz" : "/addpopquiz"}>
                <i class="bi bi-pencil-square p-2 " style={{cursor:'pointer'}}
                        data-bs-toggle="collapse">        
                </i>
                </Link>

                
                <i class="bi bi-trash3 p-2" style={{cursor:'pointer'}}
                        data-bs-toggle="collapse" 
                        onClick={()=>alert("Quiz Deleted!")}>        
                </i>
                
              </div>    
            </h5>
          </div>
        </div>
    </div>
  )
}

export default HeadingComponent