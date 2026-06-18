import { useState } from "react"
import toast from 'react-hot-toast'

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const regexPhone = /^\d+$/

const INITIAL_FORM = {
    email:'',
    phone:'',
}


export default function useContactForm(){

        const [formData,setFormData] = useState(INITIAL_FORM)
    
        const [errors,setErrors] = useState({})
        
        
    
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
            if(Object.keys(newErrors).length === 0){
                
                toast.success('Formulario Enviado')
                resetForm()
            }
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
            }else if(!phone.startsWith('3')){
                newErrors.phone='Todo numero de telefono COL empieza con 3'

            }
            else if(!regexPhone.test(phone)){
                newErrors.phone='El campo solo debe contener numeros'
            }
            else if(phone.length !== 10){
                newErrors.phone='El campo debe contener minimo de 0 a 10 caracteres'
            }

            return newErrors
        }
        const resetForm = ()=>{
            setFormData(INITIAL_FORM)
            setErrors({})
        }
 
    return {
        handleChange,
        formData,
        handleSubmit,
        errors,
        
    }
}