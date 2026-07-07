import {  useState } from 'react'
import styles from './Contact.module.css'
import useContactForm from '../../hooks/useValidation.jsx'


export default function Contact(){
    const [focusedField, setFocusedField] = useState(null)
    const {handleChange,formData,handleSubmit,errors} = useContactForm()
 

    return(
    <main>
     
      <h1>📧 Contacto</h1>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
    
        <form  onSubmit={handleSubmit}>
            <input 
            
            onChange={handleChange}
            value={formData.email}
            onFocus={()=>setFocusedField('email')}
            onBlur={()=>setFocusedField(null)}
             name='email'
              className={focusedField === 'email'? 'input-focused':''}
               type="text"
                placeholder="Correo" />
                {errors.email&&(
                    <small className={styles.miniMessage}>{errors.email}</small>
                )}
                {/* {focusedField === 'email'&& (
                    <small className={styles.miniMessage}>Introduzca un correo valido</small>
                )} */}
            
            <input
            
            onChange={handleChange}
            value={formData.phone}
            onFocus={()=>setFocusedField('phone')}
            onBlur={()=>setFocusedField(null)}
             name='phone'
              className={focusedField === 'phone'? 'input-focused':''}
               type="text"
                placeholder="Telefono" />
                {errors.phone  && (
                    <small className={styles.miniMessage}>{errors.phone}</small>
                )}
                
            <button >Enviar</button>
        </form>
    
    </main>
    )
}