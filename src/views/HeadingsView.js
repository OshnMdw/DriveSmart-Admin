
import FrameComponent from "../components/FrameComponent";
import { Link } from "react-router-dom";
import '../assets/CSS/adminDashboard.css'
import ShowHeadingComponent from "../components/ShowHeadingComponent";

const headingName = [
    {
        id: 1,
        heading: 'OverView',
        subHeading: ['Reading materials']
    },
    {
        id: 2,
        heading: 'Who can apply for driving license',
        subHeading: ['Reading materials', 'Pop quiz', 'Quiz']
    },
    {
        id: 3,
        heading: 'OverView',
        subHeading: ['Reading materials', 'Quiz']
    },
    {
        id: 4,
        heading: 'OverView',
        subHeading: ['Reading materials', 'Quiz']
    },
    {
        id: 5,
        heading: 'OverView',
        subHeading: ['Reading materials', 'Quiz']
    },
]


const HeadingsView = () => {
    return (
        <FrameComponent>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80%', backgroundColor: '#54849A', margin: 10, color: 'white', borderRadius: 10 }}>
                    <p style={{ textAlign: 'center' }} className="PageHeading">All Study Materials</p>
                    <p style={{ textAlign: 'center' }} className="CourseHeading">All Headings</p>
                </div>

                {headingName.map((heading) =>
                    <div style={{ width: '100%' }} >

                        <ShowHeadingComponent index={heading.id} title={heading.heading} body={heading.subHeading} />
                    </div>
                )}
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