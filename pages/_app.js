import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportChainIds = [5]
const connectors ={
  injected:{},
}

export default function App({ Component, pageProps }) {
  return(
    <ThirdwebWeb3Provider supportedChainIds={supportChainIds} connectors={connectors}>
        <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  
  )
}
