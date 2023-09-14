import { BookItem } from '@/pages/BooksPage/types/books.type.ts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { RiQuillPenFill } from 'react-icons/ri';
import { BiSolidBookBookmark, BiSolidCalendarStar } from 'react-icons/bi';

interface BookCardProps {
  book: BookItem;
}

const BookCard = ({ book }: BookCardProps) => (
  <Card key={book.id} className="bg-foreground">
    <CardHeader>
      <CardTitle className="text-primary-foreground">
        {book.attributes.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-primary-foreground">
      <section className="scroll-m-20 tracking-wide">
        <p className="flex flex-row gap-2 items-center">
          <RiQuillPenFill size={22} />
          {book.attributes.author}
        </p>
        <p className="flex flex-row gap-2 items-center">
          <BiSolidCalendarStar size={22} />
          {book.attributes.release_date}
        </p>
        <p className="flex flex-row gap-2 items-center">
          <BiSolidBookBookmark size={22} />
          {book.attributes.pages}
        </p>
      </section>
      <div className="flex items-center justify-center">
        <div className="w-60">
          <img
            className="w-full h-full rounded-xl"
            src={book.attributes.cover}
            alt={book.attributes.slug}
            loading="lazy"
          />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BookCard;
