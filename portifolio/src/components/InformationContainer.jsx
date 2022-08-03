import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../styles/components/informationcontainer.sass';


const InformationContainer = () => {
    return (
        <section id='information'>
            <div className='info-card'>
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Celular:</h3>
                    <p>21967405961</p>
                </div>
            </div>
            <div className='info-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>e-mail</h3>
                    <p>leoschuch23@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Rio de Janeiro/ RJ</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer
