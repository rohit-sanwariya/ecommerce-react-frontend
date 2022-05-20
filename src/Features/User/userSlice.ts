import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAccessToken from "../../Lib/getAccessToken";


export const fetchUserWithAccessToken = createAsyncThunk(
  "User/Fetch User Widh Access Token",
  async ()=>{
    const token:string = getAccessToken()!.toString()
    let httpOptions ={
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        "authorization":token
       
      }
    }
     
    const user = await fetch("http://localhost:5000/api/users/single",httpOptions)
    return user
  }
)

export interface CurrentUserSchema {
    _id:string;
    username:string;
    email:string;
    password:string;
    isAdmin:boolean;
    lastname:string;
    firstname:string;
    loading:boolean;
    error:boolean;  
  }
  
  
  
  export const userInitialState:CurrentUserSchema ={
    _id:'',
    username:'',
    email:'',
    password:'',
    isAdmin:false,
    lastname:'',
    firstname:'',
    error:false,
    loading:false
  }

export const  userSlice = createSlice(
    {
        name:"user",
        initialState:userInitialState,
        reducers:{
            
        },
        extraReducers:(builder)=>{
          builder.addCase(fetchUserWithAccessToken.fulfilled,(state,payload)=>{
              state.loading = false;
              state.error = false
          })

        }
    }
)