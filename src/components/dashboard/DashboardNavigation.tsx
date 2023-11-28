import { useTabs } from '@/hooks/use-tabs';
import { useEffect, useState } from 'react';
import { Share2 } from 'react-feather';
import Overview from './Overview';
import { useRoom } from '@/context/RoomContext';
import { Plant, Room } from '@prisma/client';
import { Framer } from '@/lib/framer';
import Notficications from './Notifications';

const DashboardNavigation = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Overview',
        children: <Overview />,
        id: 'Overview',
      },
      {
        label: 'Notifcations',
        children: <Notficications />,
        id: 'Integrations',
      },
    ],
    initialTabId: 'Matches',
  });
  const framer = useTabs(hookProps);

  return (
    <>
      <div className='col-span-8 flex justify-between'>
        <Framer.Tabs {...framer.tabProps} />
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
      {framer.selectedTab.children}
    </>
  );
};

export default DashboardNavigation;
