import Loader from '@/components/ui/Loader/Loader.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import { BookItem } from '@/pages/BooksPage/types/books.type.ts';
import { ChaptersResponse } from '@/pages/BookDetailInfo/types/response.type.ts';
import SectionTitle from '@/pages/BookDetailInfo/ui/SectionTitle.tsx';

interface BookContentProps {
  book: BookItem;
  chaptersIsLoading: boolean;
  chapters?: ChaptersResponse[];
}

const BookContent = ({
  book,
  chaptersIsLoading,
  chapters,
}: BookContentProps) => (
  <div className="flex flex-col px-8 max-w-3xl md:max-w-5xl">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="w-72 md:w-96 h-fit">
        <img
          className="w-full h-full rounded-2xl"
          src={book?.attributes.cover}
          alt={book?.attributes.slug}
          loading="lazy"
        />
      </div>
      <section className="flex flex-col w-full gap-4">
        <SectionTitle
          sectionHeader="Title"
          sectionContent={book?.attributes.title}
        />
        <SectionTitle
          sectionHeader="Dedication"
          sectionContent={book?.attributes.dedication}
        />
        <SectionTitle
          sectionHeader="Author"
          sectionContent={book?.attributes.author}
        />
        <SectionTitle
          sectionHeader="Summary"
          sectionContent={book?.attributes.summary}
        />
        <SectionTitle
          sectionHeader="Release Date"
          sectionContent={book?.attributes.release_date}
        />
      </section>
    </div>
    {chaptersIsLoading ? (
      <Loader />
    ) : (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={'chapter-items'}>
          <AccordionTrigger>Chapters</AccordionTrigger>
          <AccordionContent className="text-lg flex flex-col gap-6">
            {chapters?.map((chapter) => (
              <div key={chapter.id} className="flex flex-row gap-3">
                <span>-</span>
                {chapter.attributes.title}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )}
  </div>
);

export default BookContent;
