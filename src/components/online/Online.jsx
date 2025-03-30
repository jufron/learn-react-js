import useOnline from "./OnlineHook"

function OnlineModal () {
  const myStyle = {
    color: 'green',
    fontSize: '20px',
  };

  return (
    <h1 style={myStyle}></h1>
  );
}

function OfflineModal () {
  const myStyle = {
    color: 'red',
    fontSize: '20px',
  };

  return (
    <h1 style={myStyle}>Online</h1>
  )
}

export default function Online() {
  const isOnline = useOnline();

  return (
    <>
      {isOnline ? (<OnlineModal />) : (<OfflineModal />)}
    </>
  )
}