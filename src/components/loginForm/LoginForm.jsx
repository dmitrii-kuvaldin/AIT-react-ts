import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './loginForm.css'

export default function LoginForm() {
  return (
    <form className="myForm">
      <MyInput label={'your login name'} placeholder={'login'} type={'text'} name={'login'}/>
      <MyInput label={'type unique email'} placeholder={'email'} type={'email'} name={'email'}/>
      <MyInput label={'secret password'} placeholder={'password'} type={'password'} name={'password'}/>
      <MyButton text={'send form'} type={'submit'}/>
    </form>
  )
}

