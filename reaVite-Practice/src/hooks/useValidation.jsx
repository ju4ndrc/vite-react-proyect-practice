import { useState } from "react"

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const regexPhone = /^\d+$/
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

            setErrors(prev=>{
                const newErrors = {...prev}
                delete newErrors[name]
    
                return newErrors
            })
        }
        const handleSubmit = (event)=>{
            event.preventDefault()
            const newErrors = validate(formData)
            setErrors(newErrors)
        }   
        const validate = (formData) =>{
            const {email,phone} = formData
            const newErrors = { }
            if(!email.trim()){
                newErrors.email='El correo es obligatorio'
            }else if(!regex.test(email)){
                newErrors.email='El correo no cumples con las condiciones'
            }
            if(!phone.trim()){
                newErrors.phone='El campo esta vacio!'
            }
            else if(!regexPhone.test(phone)){
                newErrors.phone='El campo solo debe contener numeros'
            }
            else if(phone.length !== 10){
                newErrors.phone='El campo debe contener minimo de 0 a 10 caracteres'
            }

            return newErrors
        }
    
    return {
        handleChange,
        formData,
        handleSubmit,
        errors       
    }
}