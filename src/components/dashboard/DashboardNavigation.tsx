import { Share2 } from 'react-feather';

const DashboardNavigation = () => {
  return (
    <div className='col-span-8 flex  justify-between'>
      <div>Overview</div>
      {
        // Vercel Like Navigation bar animation???
      }
      <div className='flex'>
        <div className='flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-1 hover:bg-background-grey'>
          <Share2 size={16} />
          <span>Share</span>
        </div>
        <div className='flex'>
          {
            // friend
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
