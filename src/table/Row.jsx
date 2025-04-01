

// function not pure to pure component
export default function Row ({ id, text }) {

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
      </tr>
    </>
  );
}
