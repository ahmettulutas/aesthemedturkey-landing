import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const PageContainer = (props: HTMLProps<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={twMerge('mx-auto max-w-[1440px] px-4 xl:px-[120px] w-full', className)}
      {...rest}
    />
  );
};
