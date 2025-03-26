

function TodoCondition({ text, isComplate, isDeleted = false }) {
  // if (isDeleted) {
  //   return null
  // } else {
  //   return(
  //     <li>{isComplate ? <del>{text}</del> : text}</li>
  //   );
  // }
  
  if (isDeleted) {
    return null
  } else {
    return(
      <li>
        {text} {isComplate && '✅'}
      </li>
    );
  }
}

export default TodoCondition;