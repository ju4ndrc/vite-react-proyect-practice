import { use, useState } from 'react'
import styles from './Contact.module.css'
import useContactForm from '../../hooks/useValidation.jsx'

export default function Contact(){
    const [focusedField, setFocusedField] = useState(null)
    const {handleChange,formData} = useContactForm()
    return(
    <main>
      <h1>📧 Contacto</h1>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
    
        <form  action="">
            <input 
            required
            onChange={handleChange}
            value={formData.email}
            onFocus={()=>setFocusedField('email')}
            onBlur={()=>setFocusedField(null)}
             name='email'
              className={focusedField === 'email'? 'input-focused':''}
               type="text"
                placeholder="Correo" />
                {focusedField === 'email'&& (
                    <small className={styles.miniMessage}>Introduzca un correo valido</small>
                )}
            
            <input
            required
            onChange={handleChange}
            value={formData.phone}
            onFocus={()=>setFocusedField('phone')}
            onBlur={()=>setFocusedField(null)}
             name='phone'
              className={focusedField === 'phone'? 'input-focused':''}
               type="text"
                placeholder="Telefono" />
                {focusedField === 'phone' && (
                    <small className={styles.miniMessage}>Introduzca un formato valido: +57 300 123 4567</small>
                )}
                
            <button >Enviar</button>
        </form>
    
    </main>
    )
}