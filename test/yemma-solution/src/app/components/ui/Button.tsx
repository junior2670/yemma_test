type ButtonProps={
    label:string;
    className?:string;
}

export function Buttons({label, className} :ButtonProps){
return(
        <button className={` font-semibold  bg-orange-700/70 text-white rounded ${className}`}>
              {label}
         </button>
)
}