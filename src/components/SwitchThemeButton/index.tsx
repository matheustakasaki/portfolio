import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function SwitchThemeButton() {
  return (
    <div className='flex'>
      <input
        className='opacity-0'
        type='checkbox'
        name='toggleTheme'
        id='toggleTheme'
      />

      <label
        htmlFor='toggleTheme'
        className='bg-zinc-800 flex rounded-xl items-center p-1'
      >
        <DarkModeIcon className='text-white' />
        <LightModeIcon className='text-orange-400' />
        <div className='w-5 h-5 bg-white rounded-full'></div>
      </label>
    </div>
  );
}
