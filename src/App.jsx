import './App.css'
import { useState } from 'react'

function App() {
  const [value , setValue] = useState('');
  const handleClick = (val) =>{
    setValue((prev) => prev + val);
    console.log(value);
  }
  return (
    <>
      <div className='main-container bg-[#636363cc] h-screen flex flex-col items-center'>
          <h1 className='heading text-[50px] mt-5 mb-7'>CALCULATOR</h1>
          <div className='flex flex-col items-center justify-center'> 
          <div className='calculator'>
            <div className='screen h-20 flex flex-col items-end justify-center m-5 rounded-t-2xl text-white'>
              <input type="text" value={value} readOnly className='w-full bg-transparent text-right mr-10 text-[32px]'/>

            </div>
            <div className='grid grid-cols-4 gap-2 m-7 text-[25px]'>
              <button 
              className='btn-gray w-16 h-16 '
              onClick={() => setValue('')}
              >
                  AC
              </button>
              <button className='btn-gray w-16 h-16'
                onClick={() => setValue(value.slice(0,-1))}
              >
                  DEL
              </button>
              <button className='btn-gray w-16 h-16 ' onClick={() => handleClick('%')}>
                  %
              </button>
              <button className='btn-orange w-16 h-16' onClick={() => handleClick('/')}>
                  /
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('7')}>
                  7
              </button>
              <button className='btn w-16 h-16' onClick={() => handleClick('8')}>
                  8
              </button>
              <button className='btn w-16 h-16' onClick={() => handleClick('9')}>
                  9
              </button>
              <button className='btn-orange w-16 h-16 ' onClick={() => handleClick('*')}>
                  *
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('4')}>
                  4
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('5')}>
                  5
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('6')}>
                  6
              </button>
              <button className='btn-orange w-16 h-16 ' onClick={() => handleClick('-')}>
                  -
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('1')}>
                  1
              </button>
              <button className='btn w-16 h-16' onClick={() => handleClick('2')}>
                  2
              </button>
              <button className='btn w-16 h-16 'onClick={() => handleClick('3')}>
                  3
              </button>
              <button className='btn-orange w-16 h-16 ' onClick={() => handleClick('+')}>
                  +
              </button>
              <button className='btn-long col-span-2 h-16' onClick={() => handleClick('0')}>
                  0
              </button>
              <button className='btn w-16 h-16 ' onClick={() => handleClick('.')}>
                  .
              </button>
              <button className='btn-orange w-16 h-16'
                onClick={() => {try {
                  setValue(eval(value).toString());
                } catch (error) {
                    setValue("Error");
                }}
              }
              >
                  =
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>
    </>
  )
}

export default App
