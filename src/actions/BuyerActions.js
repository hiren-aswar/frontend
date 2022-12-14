import axios from 'axios'

export const loginbuyeraction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('/login/buyer',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}

export const loginadminaction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('/login/admin',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}

export const loginselleraction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('/login/seller',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}


export const autologin = () => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })


    const {data} = await axios.get('/auto/login')
    console.log(data);

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}

export const clearerror =async (dispatch)=>{
 dispatch({
    type:'ClearError'
 })
}