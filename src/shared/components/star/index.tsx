import { FC, memo } from 'react';

import './index.scss';

type StarType =  {
  page?: string;
  selected?: boolean;
}

const StarFilled: FC<StarType> = memo(({ page }) => (
  <svg className={page} width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.56754 0.28749C9.72753 -0.0958305 10.2725 -0.0958298 10.4325 0.287491L12.8634 6.11167C12.9309 6.27326 13.0834 6.38368 13.2585 6.39766L19.5684 6.90174C19.9837 6.93492 20.1521 7.45136 19.8357 7.72144L15.0282 11.8251C14.8948 11.9389 14.8365 12.1176 14.8773 12.2878L16.3461 18.4235C16.4427 18.8274 16.0019 19.1465 15.6463 18.9301L10.2441 15.6421C10.0943 15.5509 9.90574 15.5509 9.75586 15.6421L4.35369 18.9301C3.99814 19.1465 3.55728 18.8274 3.65395 18.4235L5.12271 12.2878C5.16347 12.1176 5.10521 11.9389 4.97182 11.8251L0.164335 7.72144C-0.152072 7.45136 0.0163223 6.93492 0.431612 6.90174L6.74153 6.39766C6.9166 6.38368 7.06911 6.27326 7.13656 6.11167L9.56754 0.28749Z'
      fill='#FFBC1F'
    />
  </svg>
));

const StarOutlined: FC<StarType> = memo(({ page }) => (
  <svg className={page} width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7.59798 6.30426L10 0.549456L12.402 6.30426C12.5419 6.63938 12.8576 6.86723 13.2187 6.89608L19.4493 7.39383L14.7036 11.4448C14.4276 11.6804 14.3064 12.0508 14.391 12.4042L15.8415 18.4636L10.5041 15.215C10.1945 15.0266 9.80547 15.0266 9.4959 15.215L4.15848 18.4636L5.60898 12.4042C5.69359 12.0508 5.57245 11.6804 5.29644 11.4448L0.550667 7.39383L6.78134 6.89608C7.14244 6.86723 7.4581 6.63938 7.59798 6.30426Z'
      stroke='#FFBC1F'
    />
  </svg>
));

export const Star: FC<StarType> = memo(({ selected = false, page }) => (
  <div data-test-id={selected ? 'star-active' : 'star'}>
    {selected ? <StarFilled page={page} /> : <StarOutlined page={page} />}
  </div>
));

type StarToVoteType = {
  page?: string;
  selected?: boolean;
  value: number;
  id: string;
  onSelectStar(stars: string): void;
}
export const StarToVote: FC<StarToVoteType> = memo(({ selected = false, page, value, id, onSelectStar }) => (
  <div data-test-id='star'>
    <input
      name='voteStar'
      className='star-to-vote-radio'
      type='radio'
      required={true}
      id={id.toString()}
      onChange={(e) => {
        e.stopPropagation();
        onSelectStar(e.target.value);
      }}
      value={value}
    />
    <label data-test-id={selected ? 'star-active' : ''} htmlFor={id}>
      {selected ? <StarFilled page={page} /> : <StarOutlined page={page} />}
    </label>
  </div>
));
