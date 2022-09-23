import { motion } from 'framer-motion'
import CookieConsent from 'react-cookie-consent';

import ReactGA from "react-ga4";
import SpinningText from './components/SpinningText';

ReactGA.initialize("G-6J0RFLBS5Y");
ReactGA.send("pageview");


function App() {


  return (

    <main className='h-screen dark:bg-zinc-900'>
      <header className='flex justify-between items-center p-4'>


        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3_8)">
            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#131111" />
            <path d="M23.0936 28.2275C23.567 27.4076 23.2861 26.3591 22.4662 25.8857L20.6846 24.8571C19.8647 24.3838 18.8162 24.6647 18.3429 25.4846L14.5714 32.0169C14.098 32.8369 14.379 33.8853 15.1989 34.3587L16.9804 35.3873C17.8004 35.8608 18.8488 35.5797 19.3222 34.7599L23.0936 28.2275Z" fill="white" />
            <path d="M23.0936 25.1598C23.567 25.9797 23.2861 27.0282 22.4662 27.5015L20.6846 28.5301C19.8647 29.0035 18.8162 28.7226 18.3429 27.9026L14.5714 21.3703C14.098 20.5504 14.379 19.502 15.1989 19.0286L16.9804 18C17.8004 17.5266 18.8488 17.8076 19.3222 18.6275L23.0936 25.1598Z" fill="white" />
            <path d="M24.8571 28.2275C24.3838 27.4076 24.6647 26.3591 25.4846 25.8857L27.2662 24.8571C28.0861 24.3838 29.1345 24.6647 29.6079 25.4846L33.3793 32.0169C33.8527 32.8369 33.5718 33.8853 32.7519 34.3587L30.9703 35.3873C30.1504 35.8608 29.102 35.5797 28.6286 34.7599L24.8571 28.2275Z" fill="white" />
            <path d="M24.8571 25.1598C24.3838 25.9797 24.6647 27.0282 25.4846 27.5015L27.2662 28.5301C28.0861 29.0035 29.1345 28.7226 29.6079 27.9026L33.3793 21.3703C33.8527 20.5504 33.5718 19.502 32.7519 19.0286L30.9703 18C30.1504 17.5266 29.102 17.8076 28.6286 18.6275L24.8571 25.1598Z" fill="white" />
            <path d="M21.2571 14.4H26.7429V39.0857H21.2571V14.4Z" fill="white" />
            <path d="M11.6571 14.4V8.91428H36.3429V14.4H11.6571Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_3_8">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </header>


      <section className='my-20'>


        <div className='px-4'>

          <div className=''>
            <p className='dark:text-zinc-50'>Olá! meu nome é</p>
            <h1 className='text-3xl dark:text-zinc-50 font-bold my-4'>Matheus <span>Taka</span>saki Antunes</h1>

            <p className='text-sm dark:text-zinc-50'>Sou um desenvolvedor Front-end com dois anos e meio de experiência em <strong>VTEX</strong> <strong>VTEX IO</strong>.</p>

          </div>

        </div>
      </section>


      <section>

        <SpinningText texto='VTEXIO - Front' />
        <img src='/meRounded.png' />
      </section>

      <CookieConsent />
    </main>

  )
}

export default App
