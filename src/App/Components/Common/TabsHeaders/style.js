import tw from 'tailwind-styled-components'

export const TabUl = tw.ul`
    flex 
    mb-0 
    list-none 
    flex-wrap 
    pb-1
    mr-2
    flex-row
`

export const TabLi = tw.li`
    -mb-px 
    mx-2
    last:mr-0 
    flex-auto 
    text-center
    cursor-pointer
`
export const TabItem = tw.div`
    text-xs 
    font-bold 
    uppercase 
    px-5 
    py-3 
    shadow 
    rounded 
    block 
    leading-normal 
    hover:bg-red-700 
    hover:text-white 
    focus:ring-red-500 
    focus:ring-offset-red-200 
    text-white transition 
    ease-in duration-200 
    ${({ opentab, tnumber }) =>
      opentab === tnumber ? `text-white bg-red-600` : `text-red-600 bg-white`}
`
