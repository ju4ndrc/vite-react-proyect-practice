import { useState } from "react"

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export default function useContactForm(){

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
        setErrors(prev=>{
            const newErrors = {prev}
            delete newErrors[name]

            return newErrors
        })

        const validate = (formData) =>{
            const newErrors = { }
            if(!formData.email.trim()){
                newErrors.email='El correo es obligatorio'
            }else if(!regex.test(formData.email)){
                newErrors.email='El correo no cumples con las condiciones'
            }
            return newErrors
        }
    
    return {
        handleChange,
        formData       
    }
}