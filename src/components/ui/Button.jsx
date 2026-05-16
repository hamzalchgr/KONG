const Button = ({ children }) => {
  return (
    <button
      className="px-5 py-3 leading-5 tracking-normal flex items-center gap-2 text-[15px] bg-gray-24 w-fit hover:bg-white hover:text-gray-24 transition-300"
    >{children}</button>
  )
}

export default Button