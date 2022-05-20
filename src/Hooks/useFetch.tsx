

 

 
  const apiFetch = async(url:string,body: any) => {
      console.log('called',body);
      
     
            const data = await fetch(url,{
                method:"Post",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(body)
            },
            )
            
          
            

             
            return    data 
            
     
    
    
}

export default apiFetch


