import tw from 'tailwind-styled-components'

export const Container = tw.div`
${({ display }) => display && `flex p-4`}
${({ tabscontainer }) => !tabscontainer && `my-3 `}
${({ shadow }) => !shadow && `shadow`}
    
    bg-form-gray
    mx-2 
    rounded
    
`
export const MenuButton = tw.div`
    relative 
    w-8 h-8
    flex 
    justify-center  
    items-center 
    rounded-full  
    text-gray-500 
    hover:text-gray-800 
    hover:bg-gray-300
`
export const Input = tw.input`
    ${({ errormessage }) => errormessage && `ring-red-500 `}
    ${({ disabled }) =>
      disabled ? `bg-gray-100 text-gray-400` : `text-gray-700 `}
    rounded-md
    border-transparent
    flex-1 
    border
    border-red-200 
    w-full 
    mt-1
    py-1.5 
    px-4 
    bg-white 
    
    placeholder-gray-400 
    shadow-sm 
    text-base
    ring-red-500
    
    focus:outline-none 
    focus:ring-2 
    focus:ring-red-400 
    
    
`
export const Image = tw.img`
${({ overview }) =>
  overview
    ? `bg-white 
    object-cover 
    rounded-lg 
    h-42 
    w-64 `
    : `bg-gray-100
    border-1
    object-cover 
    rounded-full 
    cursor-pointer
    h-40 
    w-40
    `}
`
export const Label = tw.label`
    flex 
    flex-col 
    items-center 
    px-2 
    pt-1
`
export const StyledButton = tw.div`
    bg-red-600 
    float-right 
    py-1
    px-2
    rounded-lg 
    transition 
    duration-500 
    ease-in-out 
    hover:bg-red-600 
    transform 
    hover:-translate-y-0 
    hover:scale-105 
    cursor-pointer
    text-white
`
export const EditStyledButton = tw.div`
    flex 
    gap-2 
    border-2 
    border-white 
    my-1 
    transition 
    duration-500 
    ease-in-out
    transform 
    hover:-translate-y-0 
    hover:scale-110
    hover:bg-red-700 
    cursor-pointer 
    rounded-md 
    px-1 
    text-sm
`

export const ButtonSecondary = tw.div`
    bg-gray-300 
    float-right 
    mx-1
    py-1.5 
    px-2
    rounded-lg 
    transition 
    duration-500 
    ease-in-out 
    hover:bg-gray-400 
    transform 
    hover:-translate-y-0 
    hover:scale-105 
    cursor-pointer
`

export const AddFContainer = tw.div`
    w-auto 
    text-center 
    text-white 
    relative 
    my-auto
`

export const AddFranchise = tw.div`
    bg-red-600 
    w-auto 
    py-1.5 
    px-2
    rounded-lg
`

export const PageHeader = tw.div`
    flex
    flex-row 
    justify-between
    items-center   
    text-xl
    font-medium
    py-0.5
    px-4
    bg-red-600
    rounded-t-md 
    text-white 
`
export const Form = tw.form`
    flex
    md:flex-row
    w-3/4 
    md:w-full
    max-w-sm
    space-y-3
    md:space-y-0
`
export const SearchInput = tw.input`
    rounded-md
    flex-1 
    border
    border-gray-300 
    w-full 
    mt-1
    h-8
    mb-1.5
    px-4 
    bg-white 
    text-gray-700 
    placeholder-gray-400 
    shadow-sm 
    text-base
    focus:outline-none 
    focus:ring-2 
    focus:ring-custom-red
    focus:border-transparent

`
export const FilterButton = tw.button`
    px-4 
    text-base
    font-semibold
    text-white bg-red-500 border-2  border-white
    rounded-r-md
    shadow-md 
    hover:bg-red-500
    focus:outline-none focus:ring-2
    focus:ring-white-100
`

export const SubmitButton = tw.button`
    py-2 
    px-2 
    flex 
    justify-center 
    items-center 
    w-full 
    bg-custom-red 
    hover:bg-red-600 
    focus:ring-red-400 
    focus:ring-offset-red-200 
    text-white  
    transition 
    ease-in 
    duration-200 
    text-center 
    text-base 
    font-semibold 
    shadow-md 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2  
    rounded-lg 
`

export const PageTitle = tw.div`
    text-2xl
    font-medium
    py-4
    px-4
    bg-red-600
    rounded-t-md
    text-white
`

export const RemoveForm = tw.div`
    bg-red-600 
    text-center  
    transition 
    duration-500 
    ease-in-out 
    hover:bg-red-600 
    transform 
    hover:-translate-y-0
    hover:scale-125
    cursor-pointer
`

export const AddForm = tw.div`
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:-translate-y-0
    hover:scale-150
    cursor-pointer
`
