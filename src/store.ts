import { create } from "zustand";
import { NoteState } from "./Components/NoteForm";
import { persist } from "zustand/middleware";

interface NoteStore {
  notes: NoteState[];
  addNote: (note: NoteState) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, note: NoteState) => void;
}

interface CopyNoteStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearchQuery: () => void;
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set, get) => ({
      notes: JSON.parse(localStorage.getItem("notes") || "[]"),
      addNote: (note: NoteState) =>
        set((state) => ({ notes: [...state.notes, note] })),
      deleteNote: (id: string) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.uuid !== id),
        }));
      },
      updateNote: (id: string, updateNote: NoteState) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.uuid === id ? updateNote : note
          ),
        }));
      },
    }),
    {
      name: "notes",
    }
  )
);

export const useCopyNoteStore = create<CopyNoteStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearSearchQuery: () => set({ searchQuery: "" }),
}));
