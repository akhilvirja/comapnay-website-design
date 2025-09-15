interface props{
    placeholder: string,
    className? : string,
}

function Input({placeholder, className} : props) {
  return (
    <>
        <input type="text" placeholder={placeholder} className={`my-1.25 p-2.5 w-full border-b-2 border-gray-400 ${className}`} />
    </>
  )
}

export default Input