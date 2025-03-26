import MyButton from "../components/buttons/MyButton";

function EventObj() {

  function handleClickAdd (e) {
    console.log(e.target);
    alert('Tombol diklik!');
  }

  function handleClickEdit (e) {
    console.log(e.target);
    alert('Tombol diubah!');
  }

  function handleClickDelete (e) {
    console.log(e.target);
    alert('Tombol dihapus!');
  }

  return (
    <>
        <MyButton 
          text='tambah' 
          onClick={handleClickAdd} 
        />
        <MyButton 
          text="ubah" 
          onClick={handleClickEdit} 
        />
        <MyButton 
          text="hapus" 
          onClick={handleClickDelete} 
        />
    </>
  );
}

export default EventObj;
