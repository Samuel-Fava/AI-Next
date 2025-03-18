import NavBar from '@/component/layout/NavBar';
import BlogSection from '@/component/common-component/cards/BlogSection';
import InterestCard from '@/component/common-component/cards/InterestCard';

const MainContent = () => {
  return (
    <div className=' w-full h-full md:mx-32 mx-6 flex md:grid grid-cols-12 isolate md:isolation-auto ease gap-4 mb-20'>
      <div className='md:col-span-6 w-80 md:w-full  h-full  flex flex-col'>
        <NavBar />
        <div className='md:flex-1'>
          <BlogSection />
        </div>
      </div>
      <InterestCard />
    </div>
  );
};

export default MainContent;
