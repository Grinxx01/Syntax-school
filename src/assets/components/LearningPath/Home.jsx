import profile from '../../img/profile.png'

function Home() {
    return(
        <div id='home' className='flex flex-col min-h-screen gap-y-10 px-4 mt-6 sm:mt-20 justify-center md:flex-row-reverse md:items-center md:mt-0 md:justify-between lg:px-10 xl:px-14 2xl:px-36'>
            <div className='w-full md:w-4/5 md:flex-1 md:basis-32'>
                <img src={profile} alt="Profile" className='w-full sm:mt-8'/>
            </div>
            <div className='md:flex-1'>
                <h2 className='text-3xl'>
                    Ngoding Lebih Cerdas, <br />
                    Impian Lebih Besar.
                </h2>
                <p className='mt-4 mb-6'>Learn, Code, Achieve</p>
                <a href="" className='bg-primary py-3 px-3 font-medium text-white rounded-sm hover:bg-second duration-200'>Mulai Ngoding</a>
            </div>
        </div>
    )
}

export default Home