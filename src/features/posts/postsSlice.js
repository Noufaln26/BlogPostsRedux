import {createSlice} from '@reduxjs/toolkit';


const initialState=[
    {id:'1',title:"Learning redux toolkit",content:"Dummy content"},
    {id: '2', title: 'Slices...', content:'CreateSlice from redux toolkit'}
]

const postsSlice =createSlice({
    name: 'posts',
    initialState,
    reducers:{}
})
export const selectAllPost = (state)=>state.posts
export default postsSlice.reducer;