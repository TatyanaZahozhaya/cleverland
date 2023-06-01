import { LoaderEllipseIcon } from '../svg-icons';

import './index.scss';

export const Loader= () => (
    <div className= 'loader-layout'  data-test-id='loader'>
      <svg className='loader-ellipse' viewBox='0 0 70 68' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <LoaderEllipseIcon />
      </svg>
    </div>
  );
