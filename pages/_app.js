// import App from 'next/app'
import { ThemeProvider, CSSReset} from "@chakra-ui/core";

const MyApp = ({Component, pageProps}) => {

  return (
      <ThemeProvider>
        <CSSReset/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}


export default MyApp
