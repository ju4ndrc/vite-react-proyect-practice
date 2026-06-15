import { useState } from "react"

export default function useValidation(){

        const [formData,setFormData] = useState({
            email:'',
            phone:''
        })
    
        const [errors,setErrors] = useState({})
        
        const [success,setSuccess] = useState(false)
    
        const handleChange= (event) =>{
            const {name, value} = event.target  
    
            setFormData(prev=>({
                ...prev,
                [name]:value
            }))
            console.log(formData)
        }
    
    return {
        handleChange,
        formData       
    }
}