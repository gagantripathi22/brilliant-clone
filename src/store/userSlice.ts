import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: string;
  title: string;
  category: 'Math' | 'Data' | 'Computer Science' | 'Science';
  isNew: boolean;
  image: string;
  progress?: number;
}

interface User {
  email: string;
  name?: string;
  currentCourse?: Course | null;
}

const initialState: User = {
    email: "",
    name: "",
    currentCourse: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentCourse(state, action: PayloadAction<Course>) {
        state.currentCourse = action.payload;
      },
      setUser(state, action: PayloadAction<User>) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.currentCourse = action.payload.currentCourse;
      },
    },
  });
  

export const { setUser, setCurrentCourse } = userSlice.actions;

export default userSlice.reducer;
