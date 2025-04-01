

// export default function Todo ({ text, isCompleted, iseDeleted = false }) {
//   if (iseDeleted) {
//     return null;
//   } else {
//     return (
//       <li>{isCompleted ? <s>{text}</s> : text }</li>
//     )
//   }
// }

export default function Todo ({ text, isCompleted, iseDeleted = false }) {
  if (iseDeleted) {
    return null;
  } else {
    return (
      <li>{text} {isCompleted && '✅'}</li>
    )
  }
}
