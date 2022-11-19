import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function SocialLinks() {
  return (
    <div className='flex'>
      <a href='https://github.com/matheustakasaki' target='_blank'>
        <GitHubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/matheus-takasaki-antunes/'
        target='_blank'
      >
        <LinkedInIcon />
      </a>

      <a href='mailto:matheus8antunes@gmail.com' target='_blank'>
        <EmailIcon />
      </a>
    </div>
  );
}
