import { Metadata } from 'next';
import { cookies } from 'next/headers';
import StatsCard from '@/components/Stats/StatsCard';
import Summary from '@/components/Stats/Summary';
import TaskTime from '@/components/Stats/TaskTime';
import checkIsPro from '@/utils/checkIsPro';

export const metadata: Metadata = {
  title: 'Stats | Flowmodor',
};

export default async function Stats() {
  const cookieStore = cookies();
  const isPro = await checkIsPro(cookieStore);

  return (
    <div className="w-full px-5 py-5 lg:py-20 xl:px-20 flex flex-col h-max lg:h-auto lg:justify-center lg:flex-row gap-5">
      <StatsCard isPro={isPro} />
      <div className="flex flex-col gap-5 xl:min-w-[28rem]">
        <Summary />
        <TaskTime />
      </div>
    </div>
  );
}
