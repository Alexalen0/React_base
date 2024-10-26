import React from 'react'

const Myheading = ({name,text,price}) => {   //const Myheading = (props) => {
    const a = "123 "
    const b = text
    const obj = {
      abc:"Inside obj",
      ccd:232
    }

    const {abc,ccd} = obj
      return (
      <>
        <h1>Heloo this is props =  {name} {text}</h1>
        <Myheadinglil1 value={price}/>
        {/* <h1>Heloo this is props =  {props.name} {props.text}</h1> */}
        <div>Myheading = {a+b} from Myheading </div>
        <main>This is main {obj.ccd}</main>
        <footer>This is footer {obj.abc}</footer>
        <footer>This is deconstructed {abc} {ccd}</footer>
        <Myheadinglil1 value={price+1000}/>
      </> 
    )
  }

// export const Myheadinglil1 = () => <h4>Myheading1</h4>
// export const Myheadinglil2 = () => <h4>Myheading2</h4>
// export const Myheadinglil3 = () => <h4>Myheading3</h4>

const Myheadinglil1 = ({value}) => <h4>{value}</h4>
const Myheadinglil2 = () => <h4>Myheading2</h4>
const Myheadinglil3 = () => <h4>Myheading3</h4>

export default Myheading
export {Myheadinglil1,Myheadinglil2,Myheadinglil3};