

export default function TaskList({ items }) {
  const style = {
    marginBotton: '10px'
  };
  return (
    <ul style={style}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  );
}
