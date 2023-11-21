import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";//type definition
const ThemeContext = createContext<Theme>("dark");//context creation

const useThemeContext = () => useContext(ThemeContext);//custom hook

export default function MyAppComponent() {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <MyThemeComponent />
    </ThemeContext.Provider>
  )//MythemeComponent-child component
}

function MyThemeComponent() {
  const theme = useThemeContext();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}
