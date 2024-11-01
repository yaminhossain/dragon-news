import background from '../../../assets/bg.png';

const Banner = () => {
    return (
        <div className="relative">
            <img src={background} alt="" />
            {/* top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                <p className='text-center font-extrabold text-2xl text-white'>Create an Amazing Newspaper</p>
                <p className='text-center text-sm mt-2 mb-6 text-white'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-error rounded-none w-36 px-3 py-5 text-white flex-nowrap'>Learn More</button>
            </div>

        </div>
    );
};

export default Banner;