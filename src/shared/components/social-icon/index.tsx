import { FC, memo } from 'react';

import './index.scss';

type SocialIconType = {
  href:string;
  alt: string;
  children?: React.ReactNode;
}

export const SocialIcon: FC<SocialIconType> = memo(({ href, alt, children }) => (
  <a href={href} target='_blank' rel='noreferrer' aria-label={alt}>
    {children}
  </a>
));
