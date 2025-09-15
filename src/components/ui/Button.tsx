function Button({ text, className }:{text:string, className?: string}) {
  return (
    <button className={`text-white border-none rounded-2xl p-0 bg-[#701d04] ${className}`}>
        <span className="py-3.5 px-4 text-3xl flex items-center justify-center font-bold hover:-translate-y-1.5 -translate-y-1 transform duration-250 rounded-2xl bg-linear-95 from-[#f47b55] from-1.49% to-[#ff3d00] to-95.34%">{text}</span>
    </button>
  )
}

export default Button