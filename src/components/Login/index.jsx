import { useState, useEffect } from 'react';
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/login.png';

// Componente responsável pela interface de Login e autenticação do sistema. 
function Login({onLogin}){
  const [ showPassword, setShowPassword ] = useState(false);
  const [ userdata, setUserData ] = useState({ username: '', password: '' });
  
  const navigate = useNavigate()

  const handleOnChangeLogin = (event, key)=>{
    setUserData({
      ...userdata, [key]:event.target.value
    })
  }
  useEffect(()=>{
    if(localStorage.getItem("authenticated") != null){
      navigate("/home");
    }
  }, [])
  // Relizando a verificação de acesso:
  const handleSubmit = ()=>{
    const isAuthenticated = onLogin(userdata.username, userdata.password)
    if(isAuthenticated){
      navigate("/home");
    }
  }

  return (
    <section className="w-full h-screen bg-[#242424] flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="md:w-[50%] w-[95%] h-screen">
        <div className='w-full h-[250px] flex justify-center items-center'>
          <h2 className="text-3xl text-center text-[#ffffff]">
            Welcome to the <br/> <span className="text-[#1ED760]"> FeedBatch Challenge </span>
          </h2>
        </div>

        <div className='w-full h-[250px] flex justify-center flex-col items-center'>
          <div className="md:w-[450px] w-[95%] h-[80px] flex flex-col justify-center md:items-start items-center">
            <span className="text-[#1ED760] font-bold text-xl">Sign in</span>
            <span className="text-[#1ED760] text-sm">Please enter your details</span>
          </div>

          <div className='md:w-[450px] w-[95%] h-[40px] flex items-center gap-[15px]'>
            <span className='text-[#ffffff]'>Username:</span>
            <input 
              type="text" 
              onChange={(e)=>handleOnChangeLogin(e, 'username')}
              className='bg-[#242424] w-[300px] text-[#1ED760] border-b-[1px] border-b-[#ffffff] outline-none' 
            />
          </div>

          <div className='md:w-[450px] w-[95%] h-[40px] flex items-center gap-[15px]'>
            <span className='text-[#ffffff]'>Password:</span>
            <input 
              type={showPassword ? 'text' : 'password'} 
              onChange={(e)=>handleOnChangeLogin(e, 'password')}
              className='bg-[#242424] w-[300px] text-[#1ED760] border-b-[1px] border-b-[#ffffff] outline-none' 
            />
            
            <button onClick={()=>setShowPassword(!showPassword)} className='text-[#1ED760]'>
              { showPassword ? <FaUnlock /> : <FaLock /> }  
            </button>
          </div>

          <div className='w-[350px] h-[105px] mt-[20px] flex items-center flex-col gap-[10px]'>
            <button
              onClick={handleSubmit}
              className='w-[120px] py-[8px] rounded-lg hover:bg-[#1ED760] hover:font-bold duration-150 hover:text-[#ffffff] bg-[#ffffff] '>
              Sign in
            </button>
            <div className="w-full h-[40px] flex flex-row items-center justify-center gap-[10px]">
              <FcGoogle className="text-xl" /><span className="text-[#ffffff] text-sm hover:text-[#1ED760] cursor-pointer">Continue with google</span>
            </div>

          </div>
        </div>

      </div>

      <div className="w-[50%] h-screen hidden md:block">
        <img src={imgLogin} alt="login" className='h-screen' />
      </div>
    </section>
  )
}

export default Login