import ComplaintsCard from "../components/ComplaintsCard";



const ComplainList = [
    {
        id : 1,
        sender : 'amal',
        date : '03/04/2023',
        complaint : 'rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf'
    },
    {
        id : 2,
        sender : 'amal',
        date : '03/04/2023',
        complaint : 'rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf'
    },
    {
        id : 3,
        sender : 'amal',
        date : '03/04/2023',
        complaint : 'rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf'
    },
    {
        id : 4,
        sender : 'amal',
        date : '03/04/2023',
        complaint : 'rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf'
    },
]

const ComplaintsView = () => {
     return(
        <div>
        
        {ComplainList.map((complaint)=>
        <ComplaintsCard key={complaint.id} date={complaint.date} sender={complaint.sender} complaintsDescription={complaint.complaint}/>
        )}
       
        
        </div>

     )
}

export default ComplaintsView;