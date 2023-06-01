import { useAppSelector } from '../store';

export const useHighlightWords = (title: string) => {
  const { bookNameFilter } = useAppSelector((state) => state.filter);

  if (!bookNameFilter) {
    return title;
  }
  const regexp = new RegExp(bookNameFilter, 'ig');
  const match = title.match(regexp);

  if (match) {
    return title.split(regexp).map((item, i, arr) => {
      if (i < arr.length - 1) {
        const highlited = match.shift();

        return (
          <span key={item}>
            {item}
            <span data-test-id='highlight-matches' className='highlited-words'>
              {highlited}
            </span>
          </span>
        );
      }

      return item;
    });
  }

  return title;
};
