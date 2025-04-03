import NoteApp from "../components/note/NoteApp";
import NoteAppWithReducer from "../components/note-with-reducer/NoteApp";
import NoteAppWithImmerReducer from "../components/note-with-immer-reducer/NoteApp";

export default function NotePages () {
  return (
    <>
      <h1 className="text-4xl font-bold my-8 mb-2 text-center">with state</h1>
      <NoteApp />
      <h1 className="text-4xl font-bold my-8 mb-2 text-center">with reducer</h1>
      <NoteAppWithReducer />
      <h1 className="text-4xl font-bold my-8 mb-2 text-center">with library immer reducer</h1>
      <NoteAppWithImmerReducer />
    </>
  );
}
