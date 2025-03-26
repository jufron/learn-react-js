import MyButton from "../components/buttons/MyButton";

// event prepagation
function Sidebar({ handleClick }) {

    const styleSidebar = {
        width: '50px',
        height: '100px',
        backgroundColor: 'blue'
    }
    
  return (
    <div style={styleSidebar} onClick={handleClick}>
        <MyButton onClick={handleClick} text={'menu 1'} />
        <MyButton onClick={handleClick} text={'menu 2'} />
    </div>
  );
}

export default Sidebar;
