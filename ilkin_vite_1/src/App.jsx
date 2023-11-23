import './App.css'
import useLightDarkMode from './lightDarkModeHook'

function App() {
    const {Theme ,changeTheme} = useLightDarkMode()



  return (
    <>
    <section>
    <i className={`fa-solid ${Theme  ? 'fa-sun' : 'fa-moon'}`} onClick={changeTheme}></i>
      <h1>React</h1>
      <ul>
        <li>ReactDarkLighMode1</li>
        <li>ReactDarkLighMode2</li>
        <li>ReactDarkLighMode3</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laborum animi rem, quo ipsam ab nesciunt quos dolorum illo harum! Tempore magni impedit sunt ullam autem deserunt earum dolorem provident.</p>
    </section>

    {/* <StyledComponents/> */}
    </>
  )
}

export default App
