import Paragraph from '@/components/text-reveal';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const longText =
    'This is a long paragraph to demonstrate the scroll-triggered text reveal animation using Framer Motion and Tailwind CSS. This is a long paragraph to demonstrate the scroll-triggered text reveal animation using Framer Motion and Tailwind CSS.';
  return (
    <>
      {/* Spacer div to create scrollable space */}
      <div className='h-[100vh]' />

      {/* Paragraph component for the text reveal */}
      <Paragraph paragraph={longText} />

      {/* Additional spacer divs for scrolling */}
      <div className='h-[100vh]' />
      <div className='h-[50vh]' />
    </>
  );
}
