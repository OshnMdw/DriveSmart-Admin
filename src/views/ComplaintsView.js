import ComplaintsCard from "../components/ComplaintsCard";
import FrameComponent from "../components/FrameComponent";

const ComplainList = [
  {
    id: 1,
    sender: "amal",
    date: "03/04/2023",
    complaint:
      "rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf",
  },
  {
    id: 2,
    sender: "amal",
    date: "03/04/2023",
    complaint:
      "rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf",
  },
  {
    id: 3,
    sender: "amal",
    date: "03/04/2023",
    complaint:
      "rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf",
  },
  {
    id: 4,
    sender: "amal",
    date: "03/04/2023",
    complaint:
      "rnosmbprmvpmvbnerwpc ntyhtgrefdscvfbnhtgrfdsbgfdvfnhtegrfwdcxbnhyhtgrvfbf",
  },
];

const ComplaintsView = () => {
  return (
    <FrameComponent>
      <h2 className=" text-center">Complaints</h2>
      <div className=" container col-10 mx-auto">
        {ComplainList.map((complaint) => (
          <ComplaintsCard
            key={complaint.id}
            date={complaint.date}
            sender={complaint.sender}
            complaintsDescription={complaint.complaint}
          />
        ))}
      </div>
    </FrameComponent>
  );
};

export default ComplaintsView;
