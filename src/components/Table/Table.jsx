import Row from "./Row";


function Table() {
  return (
    <table border='1'>
      <tbody>
        <Row id="1" text="satu" />
        <Row id="2" text="dua" />
        <Row id="3" text="tiga" />
        <Row id="4" text="empat" />
        <Row id="5" text="lima" />
      </tbody>
    </table>
  );
}

export default Table;
