import useRouter from "../hooks/useRouter"

export default function Link({href,children,className='',exact = true, ...restOfProps}){
    
    const {currentPath,navigateTo} = useRouter()
    const handleClick = (event)=>{
        event.preventDefault()

        navigateTo(href)
    }

    const isActive = exact ? currentPath === href : currentPath.startsWith(href)
    const linkClassName = isActive ? `${className} nav-link`:className
    return(
        <a href={href} className={linkClassName} {...restOfProps} onClick={handleClick}>
            {children}
        </a>
    )

}