import { AppContainer, SocialIconContainer } from '../containers';
import { SocialIcon } from '../social-icon';
import { FacebookIcon, InstagramIcon, LinkedinIcon,VkontakteIcon } from '../svg-icons';
import { FooterText } from '../text';

import './index.scss';

export const AppFooter = () => (
  <AppContainer>
    <footer>
      <div className='footer-text-container'>
      <FooterText text='© 2020-2023 Cleverland. ' />{' '}
      <FooterText text='Все права защищены.' />
      </div>

      <SocialIconContainer>
        <SocialIcon href='https://www.facebook.com/clevertec.ru/' alt='ссылка на Facebook'>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon href='https://www.instagram.com/clevertec.ru/' alt='ссылка на Instagram'>
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href='https://vk.com/clevertec' alt='ссылка на Vkontakte'>
          <VkontakteIcon />
        </SocialIcon>
        <SocialIcon href='https://www.linkedin.com/company/clevertec-ru/' alt='ссылка на Linkedin'>
          <LinkedinIcon />
        </SocialIcon>
      </SocialIconContainer>
    </footer>
  </AppContainer>
);
