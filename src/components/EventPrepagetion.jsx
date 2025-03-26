import Sidebar from "../components/Sidebar";

const EventPrepagetion = () => {
  return (
    <>
      <Sidebar handleClick={(e) => {
        e.stopPropagation();
        alert('sidebar is clicked'); 
      }} />
    </>
  );
};

export default EventPrepagetion;
