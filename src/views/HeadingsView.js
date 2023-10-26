
import FrameComponent from "../components/FrameComponent";
import { Link } from "react-router-dom";
import '../assets/CSS/adminDashboard.css'
import ShowHeadingComponent from "../components/ShowHeadingComponent";
import { useEffect, useState } from "react";
import axios from "axios";



// const headingName = [
//     {
//         id: 1,
//         heading: 'OverView',
//         subHeading: ['Reading materials']
//     },
//     {
//         id: 2,
//         heading: 'Who can apply for driving license',
//         subHeading: ['Reading materials', 'Pop quiz', 'Quiz']
//     },
//     {
//         id: 3,
//         heading: 'OverView',
//         subHeading: ['Reading materials', 'Quiz']
//     },
//     {
//         id: 4,
//         heading: 'OverView',
//         subHeading: ['Reading materials', 'Quiz']
//     },
//     {
//         id: 5,
//         heading: 'OverView',
//         subHeading: ['Reading materials', 'Quiz']
//     },
// ]


const HeadingsView = () => {

    const [headings, setHeadings] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getTopics')
        .then(headings =>setHeadings(headings.data))
        .catch(err => console.log(err))
    },[])

    return (
        <FrameComponent>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80%', backgroundColor: '#54849A', margin: 10, color: 'white', borderRadius: 10 }}>
                    <p style={{ textAlign: 'center' }} className="PageHeading">All Study Materials</p>
                    <p style={{ textAlign: 'center' }} className="CourseHeading">All Headings</p>
                </div>

                {headings.map((heading) =>{
                    return(

                        <div style={{ width: '100%'}} >
                            <ShowHeadingComponent index={heading.no} title={heading.title} body={['Study Material', 'Quiz', 'Pop Quiz']} />
                            
                        </div>
                    )
                
                })}

                {/* {headingName.map((heading) =>
                    <div style={{ width: '100%' }} >

                        <ShowHeadingComponent index={heading.id} title={heading.heading} body={heading.subHeading} />
                    </div>
                )} */}
                <div style={{ display: 'flex',justifyContent : 'flex-end'}}>
                    <Link to="/headings/addHeading" >
                        <i style={{ fontSize: 50 ,  }} class="bi bi-plus-circle-fill"></i>
                    </Link>
                    
                </div>


            </div>
        </FrameComponent>

    )
}

export default HeadingsView;