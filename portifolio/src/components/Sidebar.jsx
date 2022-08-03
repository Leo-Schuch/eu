import Avatar from '../img/eu2.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks'


const Sidebar= () => {
  return (
    <aside id="sidebar">
      <img src= {Avatar} alt="Leonardo Schuch"/>
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" 
      className="btn">
        Donwload curriculo
      </a>
    </aside>
  );
};

export default Sidebar