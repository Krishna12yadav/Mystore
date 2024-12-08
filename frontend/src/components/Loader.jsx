import { Oval } from "react-loader-spinner"

export const Loader = () => {
  return (
    <div className="flex justify-center items-center m-10 "><Oval
    visible={true}
    height="40"
    width="40"
    color="black"
    secondaryColor="#CDC7E5"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  )
}
