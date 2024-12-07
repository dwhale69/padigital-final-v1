import React from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
}

const InfiniteScroll = ({ children, direction = 'left' }: InfiniteScrollProps) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div 
        className={`flex animate-scroll-${direction} items-center`}
        style={{ animationDuration: '40s' }}
      >
        {children}
        {children}
      </div>
      <div 
        className={`flex absolute top-0 ${direction === 'left' ? 'left-[100%]' : 'right-[100%]'} animate-scroll-${direction} items-center`}
        style={{ animationDuration: '40s' }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroll;