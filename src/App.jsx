import { useState } from 'react';
import './App.css'
import { TextField, Stack, Button } from '@mui/material';

function App() {
  const [interest,setInterest]=useState(0)

  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const[isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const[isRateInvalid,setIsRateInvalid] = useState(false)

  const[isYearInvalid,setIsYearInvalid] = useState(false)

  //console.log(principle);

  const handleInputValidation=(tag)=>{
    const{name,value}=tag
    //console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInvalid(false)

      }else if(name=="rate"){
        setRate(value)
        setIsRateInvalid(false)

      }else{
        setYear(value)
        setIsYearInvalid(false)

      }

      
  }else{
    //invalid
    if(name=="principle"){
      setPrinciple(value)
      setIsPrincipleInvalid(true)
  }else if(name=="rate"){
    setRate(value)
    setIsRateInvalid(true)

  }else{
    setYear(value)
    setIsYearInvalid(true)

  }
}
  }

 
  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("calculate button clicked!!!!");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)

    }else{
      alert('plese fill the form complitely!!!')
    }
   

  }

  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }

  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>{interest}</h1>
          <p className='fw-bolder'>Total Simple Interst</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
          <TextField value={principle ||""} name='principle' onChange={e=>handleInputValidation(e.target)} className='w-100' id="principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount!!!</div>
          }

          <div className="mb-3">
          <TextField value={rate ||""}  name='rate' onChange={e=>handleInputValidation(e.target)} className='w-100' id="rate" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {
            isRateInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Rate Amount!!!</div>
          }

          
          <div className="mb-3">
          <TextField value={year ||""} name='year' onChange={e=>handleInputValidation(e.target)} className='w-100' id="year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            isYearInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Year!!!</div>
          }

          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
