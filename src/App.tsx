import SocialLinks from './components/SocialLinks';
import SwitchThemeButton from './components/SwitchThemeButton';
import Tech from './components/Tech';

function App() {
  return (
    <main className='h-screen overflow-auto box-border tracking-wider bg-zinc-100  dark:bg-zinc-900 dark:text-zinc-50 text-zinc-800'>
      <section className='max-w-3xl mx-auto md:dark:border-slate-100 md:border-slate-800 md:border-2 my-4 p-4 rounded-2xl'>
        <header className='flex justify-between items-center p-4'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z'
                fill='#131111'
              />
              <path
                d='M23.0936 28.2275C23.567 27.4076 23.2861 26.3591 22.4662 25.8857L20.6846 24.8571C19.8647 24.3838 18.8162 24.6647 18.3429 25.4846L14.5714 32.0169C14.098 32.8369 14.379 33.8853 15.1989 34.3587L16.9804 35.3873C17.8004 35.8608 18.8488 35.5797 19.3222 34.7599L23.0936 28.2275Z'
                fill='white'
              />
              <path
                d='M23.0936 25.1598C23.567 25.9797 23.2861 27.0282 22.4662 27.5015L20.6846 28.5301C19.8647 29.0035 18.8162 28.7226 18.3429 27.9026L14.5714 21.3703C14.098 20.5504 14.379 19.502 15.1989 19.0286L16.9804 18C17.8004 17.5266 18.8488 17.8076 19.3222 18.6275L23.0936 25.1598Z'
                fill='white'
              />
              <path
                d='M24.8571 28.2275C24.3838 27.4076 24.6647 26.3591 25.4846 25.8857L27.2662 24.8571C28.0861 24.3838 29.1345 24.6647 29.6079 25.4846L33.3793 32.0169C33.8527 32.8369 33.5718 33.8853 32.7519 34.3587L30.9703 35.3873C30.1504 35.8608 29.102 35.5797 28.6286 34.7599L24.8571 28.2275Z'
                fill='white'
              />
              <path
                d='M24.8571 25.1598C24.3838 25.9797 24.6647 27.0282 25.4846 27.5015L27.2662 28.5301C28.0861 29.0035 29.1345 28.7226 29.6079 27.9026L33.3793 21.3703C33.8527 20.5504 33.5718 19.502 32.7519 19.0286L30.9703 18C30.1504 17.5266 29.102 17.8076 28.6286 18.6275L24.8571 25.1598Z'
                fill='white'
              />
              <path
                d='M21.2571 14.4H26.7429V39.0857H21.2571V14.4Z'
                fill='white'
              />
              <path
                d='M11.6571 14.4V8.91428H36.3429V14.4H11.6571Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_3_8'>
                <rect width='48' height='48' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <SwitchThemeButton />
        </header>

        <section className='box-border my-4'>
          <div className='px-4'>
            <div className=''>
              <p className=''>Olá! meu nome é</p>
              <h1 className='text-3xl tracking-widest dark:text-zinc-50 font-bold my-4'>
                Matheus{' '}
                <span className='bg-clip-text text-transparent stroke-violet-50 stroke-2 bg-gradient-to-r from-cyan-300 to-blue-500 animate-animatedGradient'>
                  Taka
                </span>
                saki Antunes
              </h1>

              <p className='text-md dark:text-zinc-50'>
                Sou um desenvolvedor Front-end com dois anos e meio de
                experiência no mercado de trabalho.
              </p>
            </div>
          </div>
        </section>

        <section
          className='flex justify-center
my-5'
        >
          <div className='box-border relative rounded-full flex justify-center items-center'>
            <img className='' src='/meRounded.png' />
          </div>
        </section>

        <section className='flex flex-col justify-center m-4'>
          <h2 className='text-2xl font-bold my-4'>Front-end Developer</h2>
          <p>
            Posso dizer que sou um ávido aprendiz do vasto campo de
            desenvolvimento. Sobretudo em desenvolvimento de front-end no qual
            já tive experiências como: elaboração de landing pages, implantação
            de e-commerces, sites institucionais, SEO on-page e API 's Rest.
            Também tenho experiência com plataformas de e-commerce com foco em
            VTEX e VTEX IO, desenvolvimento de layouts e melhoria contínua.
          </p>
        </section>

        <section className='flex flex-col justify-center my-10 mx-4'>
          <h2 className='text-2xl font-bold my-4'>
            Tecnologias que me interesso
          </h2>

          <Tech
            nameImage='/vtex-io.svg'
            altTextTechImage='logo vtex io'
            description='Já trabalhei com a plataforma VTEX por mais de dois anos realizando construção de páginas, customizações, melhorias de site e correções de bugs. Em 2022, me certifiquei como VTEX IO Developer realizando assim, uma de minhas metas profissionais.'
          />

          <Tech
            nameImage='/react-name.svg'
            altTextTechImage='Logo React'
            description='Me interesso muito pelo React.js e React Native, hoje posso dizer que é meu framework favorito. Gosto muito da ideia da ferramenta e as facilidades que ela traz para o desenvolvedor.'
          />

          <Tech
            nameImage='/js-name.svg'
            altTextTechImage='Logo Javascript'
            description='A principal linguagem com a qual trabalho é o Javascript e seu universo. Me encanto com as suas tendências e inovações no mundo da tecnologia.'
          />
        </section>

        <footer>
          <section className='flex flex-col justify-center items-center my-10 mx-4'>
            <h2 className='text-2xl font-bold my-4'>Fale comigo!</h2>

            <SocialLinks />
          </section>
        </footer>
      </section>
    </main>
  );
}

export default App;
