

const Expline = () => {
    return (
        <div className="mt-12 md:mt-28 lg:mt-48">
           <div className="text-center">
           <h1 className="text-5xl font-bold">HOW IT WORKS</h1>
            <p className="text-xl mt-6 leading-8">Everybody loves tech gadgets, But our’s is different. Here is how it works. <br /> Its should be simple. Add how easy is to install your product</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-14">
            {/* first div */}
            <div className="flex flex-col justify-center items-center px-8">  
                <img src={'https://i.ibb.co/7vtwfGn/desktop-106x106.png'} alt="" />
                <h1 className="text-3xl font-semibold text-center ">Connect Device</h1>
                <p className=" text-center">Connected devices are physical objects that can connect with each other and other systems via the internet</p>
            </div>
            {/* second */}
            <div className="flex flex-col justify-center items-center px-8">  
                <img src={'https://i.ibb.co/1GsZ9Jp/toggles-106x106.png'} alt="" />
                <h1 className="text-3xl font-semibold text-center ">Configure it</h1>
                <p className=" text-center">The hardware and software specifications of a computing system and its attached devices.</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8">  
                <img src={'https://i.ibb.co/C2s47pG/trophy-106x106.png'} alt="" />
                <h1 className="text-3xl font-semibold text-center ">Yay! Done</h1>
                <p className=" text-center">Used to express joy, approval, or excitement. Yay! We won!</p>
            </div>


           </div>
            
        </div>
    );
};

export default Expline;