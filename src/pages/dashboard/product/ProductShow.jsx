import { useParams } from "react-router";

export default function ProductShow () {
  const params = useParams();

  console.log(params);
  return (
    <>
      { params.id ?? <div>ID {params.id}</div> }
      <div>ProductShow</div>
    </>
  )
}