import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

export default function SwitchThemeButton() {
  const [toggle, setToggle] = useState(true);

  function checked() {
    if (toggle) {
      document.querySelector('html')?.classList.add('dark');
      setToggle(!toggle);
    } else {
      document.querySelector('html')?.classList.remove('dark');
      setToggle(!toggle);
    }
    return toggle;
  }

  return (
    <div className='flex'>
      <input
        defaultChecked={toggle}
        onChange={checked}
        className='opacity-0'
        type='checkbox'
        name='toggleTheme'
        id='toggleTheme'
      />

      <label
        htmlFor='toggleTheme'
        className='bg-zinc-800 flex gap-1 rounded-xl items-center p-1 relative'
      >
        <DarkModeIcon className='text-white max-w-[18px]' />
        <LightModeIcon className='text-orange-400 max-w-[18px]' />
        <div
          className={`transition ease-in-out w-5 h-5 bg-white rounded-full absolute ${
            toggle ? 'left-[5px]' : 'right-[5px]'
          }`}
        ></div>
      </label>
    </div>
  );
}
