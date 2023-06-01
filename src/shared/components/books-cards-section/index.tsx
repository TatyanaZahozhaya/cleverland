import { useSortByRating } from '../../hooks';
import { useAppSelector } from '../../store';
import { BookCard } from '../book-card';
import { CardsContainer } from '../containers';

const renderBookCards = (view: string) => (item: any) => <BookCard view={view} key={item.id} id={item.id} {...item} />;

export const BooksCardsSection = () => {
  const { view } = useAppSelector((state) => state.view);
  const booksListFilteredByRating = useSortByRating();

  return <CardsContainer view={view}>{booksListFilteredByRating.map(renderBookCards(view))}</CardsContainer>;
};
