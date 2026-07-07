
import { useLocation, useNavigate } from "react-router"
export default function useRouter(){
    
    const location = useLocation()
    const navigate = useNavigate()
    
  {/*Nos permite navigar de forma pragmatica al hacer submit en formulario*/}
  function navigateTo(path){
    navigate(path)
  }

  return{
    currentPath:location.path,
    navigateTo
  }
}