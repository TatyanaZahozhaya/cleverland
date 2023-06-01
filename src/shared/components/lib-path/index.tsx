import { FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { routesPath } from '../../constants';
import { AppContainer } from '../containers';
import { PathText } from '../text';

import './index.scss';

type LibPathType = {
  categoryRU: string | undefined;
  name: string | undefined;
}

export const LibPath: FC<LibPathType> = memo(({ categoryRU, name }) => {
  const { category } = useParams();
  const {mainPageHalfPath} = routesPath;

  return (
    <div className='lib-path'>
      <AppContainer>
        <div className='lib-path-box'>
          <Link data-test-id='breadcrumbs-link' className='path-text' to={`${mainPageHalfPath}/${category}`}>
           
            {categoryRU}
          </Link>
          <PathText text=' / ' />
          <PathText dataTestID='book-name' text={name} />
        </div>
      </AppContainer>
    </div>
  );
});
