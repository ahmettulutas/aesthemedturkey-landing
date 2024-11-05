import Link from 'next/link';
import { getAllBlogs } from '@/actions/blog';
import { SharedPageProps } from '@/types/shared';
import CoverImage from '@/components/sanity-image/cover-image';
import { Navbar } from '@/components/navbar';

export default async function BlogsPage({ params }: Readonly<SharedPageProps>) {
  const blogs = await getAllBlogs(params.lng);
  return (
    <main>
      <h1>This page shows all blogposts</h1>
      {/* <RevealLinks /> */}
      <Navbar />
      <div className='flex flex-col space-x-2 w-screen h-screen items-center justify-center'>
        {blogs.map((blog) => (
          <div key={blog._id} className='flex gap-2 items-center'>
            <CoverImage
              image={blog.coverImage}
              width={96}
              height={96}
              wrapperStyles='h-[96px] w-[96px]'
            />
            <Link href={`/${params.lng}/blogs/${blog.slug}`}>
              <h2 className='hover:underline transition-all ease-in-out duration-200 cursor-pointer'>
                {blog.title}
              </h2>
            </Link>
            {blog.date ? <span>{blog.date}</span> : null}
          </div>
        ))}
      </div>
    </main>
  );
}
