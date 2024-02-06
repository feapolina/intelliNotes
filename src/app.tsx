import imgLogo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";


const note = {
  date: new Date(),
  content: "Hello World!",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      {/* Logo da aplicação */}
      <img src={imgLogo} alt="logo nlw expert" />
      {/* SearchBar */}
      <form className="w-full ">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500"
        />
      </form>
      {/* Aqui é a linha divisoria fininha */}
      <div className="h-px bg-slate-700"></div>

      {/* Card Container */}
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px] ">
        <NewNoteCard />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
