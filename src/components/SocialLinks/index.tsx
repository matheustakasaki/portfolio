import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
export default function SocialLinks() {
    return (


        <div className='flex flex-col '>

            <a href="https://github.com/matheustakasaki" target={'_blank'}>

                <span className='pr-2'>

                    Github
                </span>

                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </a>
            <a href="https://www.linkedin.com/in/matheus-takasaki-antunes/" target={'_blank'}>

                <span className="pr-2">
                    Linkedin

                </span>

                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </a>

            <a href="mailto:matheus8antunes@gmail.com" target={'_blank'}>

                <span className="pr-2">

                    E-mail
                </span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </a>
        </div>
    )
}
