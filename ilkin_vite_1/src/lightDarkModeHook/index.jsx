import React, { useEffect, useState } from 'react'

const useLightDarkMode = () => {

    const [Theme, settheme] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : '')

    useEffect(() => {
      localStorage.setItem('theme',JSON.stringify(Theme))
      document.body.classList.toggle('dark',Theme)
        
    }, [Theme])
    

    function changeTheme() {
        document.body.classList.toggle('dark')
        settheme(!Theme)
    }
  return {Theme ,changeTheme}
}

export default useLightDarkMode