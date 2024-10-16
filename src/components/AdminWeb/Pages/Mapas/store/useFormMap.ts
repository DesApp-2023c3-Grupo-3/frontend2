import { create } from "zustand";

interface StoreUseFormMap {
  file: File | undefined,
  name: string
  setFile: (newFile: File | undefined) => void
  setName: (newName: string) => void
}

export const useFormMap = create<StoreUseFormMap>()((set) => ({
  name: "",
  file: undefined,

  setFile: (newFile) => {
    set(({
      file: newFile
    }))
  },

  setName: (newName) => {
    set(({
      name: newName
    }))
  }

}))