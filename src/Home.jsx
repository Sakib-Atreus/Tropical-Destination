import group167 from "./../src/assets/Group 167.png";
import group171 from "./../src/assets/Group 171.png";
import maskgroup from "./../src/assets/Mask group.png";
import c1 from "./../src/assets/card-image-1.png";
import c2 from "./../src/assets/card-image-2.png";
import c3 from "./../src/assets/card-image-3.png";
import c4 from "./../src/assets/card-image.png";
import r19 from "./../src/assets/Rectangle 19.png";
import r25 from "./../src/assets/Rectangle 25.png";
import r27 from "./../src/assets/Rectangle 27.png";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <section className="mb-5">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Schedules</a></li>
                            <li><a>Membership</a></li>
                            <li><a>Pricing</a></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold">Tropical <span className="hidden lg:block md:block">Destination</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Schedules</a></li>
                            <li><a>Membership</a></li>
                            <li><a>Pricing</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="mr-5">Offers</a>
                        <a className="btn bg-[#F27A44] text-white rounded-full">Course</a>
                    </div>
                </div>
            </section>
            <section className="grid lg:grid-cols-2 md:grid-cols-2 items-center bg-[#e9e4cb44] mb-12 p-5">
                <div className="lg:pl-24">
                    <p className="text-md font-bold mb-2">Discover the beauty of the tropics</p>
                    <h1 className="text-5xl font-bold mb-6">Tropical <br /> Destinations <br /><span className="font-medium">For Student</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam voluptates! Iusto voluptas temporibus laudantium!</p>
                    <a className="btn bg-[#F27A44] mt-12 text-white rounded-full w-36">SIGN UP</a>
                </div>
                <div className="flex justify-center">
                    <img className="w-1/2 h-1/2 mb-12" src={group171} alt="" />
                </div>
            </section>
            <section className="grid lg:grid-cols-2 md:grid-cols-2 pl-12 lg:pl-0 md:pl-0 gap-5 items-center">
                <div className="lg:pl-24 md:pl-12">
                    <div className="flex justify-between shadow-md rounded-lg p-3 gap-2 mb-7 w-3/4">
                        <img className="w-16 h-16 rounded-full" src={r19} alt="" />
                        <div>
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, itaque!</p>
                        </div>
                    </div>
                    <div className="flex justify-between shadow-md rounded-lg p-3 gap-2 mb-7 w-3/4">
                        <img className="w-16 h-16 rounded-full" src={r25} alt="" />
                        <div>
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, itaque!</p>
                        </div>
                    </div>
                    <div className="flex justify-between shadow-md rounded-lg p-3 gap-2 mb-7 w-3/4">
                        <img className="w-16 h-16 rounded-full" src={r27} alt="" />
                        <div>
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, itaque!</p>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-24">
                    <h1 className="text-3xl font-bold">Tropical Adventure</h1>
                    <p className="font-semibold">for Students</p>
                    <p className="text-lg font-medium mb-4">Student Tropical Vacation: Relax and Recharge</p>
                    <ol className="list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Unde culpa eum nulla voluptas?</li>
                        <li>Ratione minus tempora voluptas earum!</li>
                        <li>Veritatis nemo maxime incidunt hic.</li>
                        <li>Sapiente eaque aspernatur perspiciatis!</li>
                    </ol>
                    <a className="btn bg-[#F27A44] mt-12 text-white rounded-full w-36">Explore More</a>
                </div>
            </section>
            <section className="text-center p-4">
                <h1 className="text-2xl font-semibold mb-8 mt-24 text-left lg:ml-28">Our Destinations</h1>
                <div className="carousel rounded-box gap-7">
                    <div className="carousel-item fixed">
                        <div>
                            <img className="w-48 h-48" src={c1} alt="Burger" />
                            <h1 className="text-lg font-bold">Harvard University</h1>
                            <p className="font-bold text-sm mt-5">Cambridge, UK</p>
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div>
                            <img className="w-48 h-48" src={c2} alt="Burger" />
                            <h1 className="text-lg font-bold">Oxford University</h1>
                            <p className="font-bold text-sm mt-5">England</p>
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div>
                            <img className="w-48 h-48" src={c3} alt="Burger" />
                            <h1 className="text-lg font-bold">Stanford University</h1>
                            <p className="font-bold text-sm mt-5">Stanford, California</p>
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div>
                            <img className="w-48 h-48" src={c4} alt="Burger" />
                            <h1 className="text-lg font-bold">Nanyang Technology</h1>
                            <p className="font-bold text-sm mt-5">Singapore</p>
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div>
                            <img className="w-48 h-48" src={c1} alt="Burger" />
                            <h1 className="text-lg font-bold">Information Technology</h1>
                            <p className="font-bold text-sm mt-5">Australia</p>
                        </div>
                    </div> 
                </div>
            </section>
            <section className="grid lg:grid-cols-2 md:grid-cols-2 p-4 lg:p-0 items-center mb-12">
                <div className="lg:pl-24 md:pl-12">
                    <p className="text-md font-bold mb-2 mt-12">Get 20% off for student</p>
                    <h1 className="text-3xl font-bold mb-6">Student discounts available.</h1>
                    <p className="text-lg font-medium mb-4">Student Tropical Vacation: Relax and Recharge</p>
                    <ol className="list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Unde culpa eum nulla voluptas?</li>
                        <li>Ratione minus tempora voluptas earum!</li>
                        <li>Veritatis nemo maxime incidunt hic.</li>
                        <li>Sapiente eaque quia aspernatur perspiciatis!</li>
                    </ol>
                    <a className="btn bg-[#F27A44] mt-12 text-white rounded-full w-36">Explore More</a>
                </div>
                <div className="flex justify-center">
                    <img className="w-1/2 h-1/2 mb-12" src={maskgroup} alt="" />
                </div>
            </section>
            <section className="grid lg:grid-cols-2 md:grid-cols-1 p-2 lg:p-0 items-center mb-12">
                <div className="flex justify-center">
                    <img className="w-1/2 h-1/2 mb-12" src={group167} alt="" />
                </div>
                <div className="lg:pl-24 md:text-center">
                    <h1 className="text-2xl font-bold mb-4">Book now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet, cumque nihil doloremque!</p>

                    <p className="font-semibold mt-5">City</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    <div className="flex gap-5 mt-5 md:pl-44">
                        <div className="">
                        <p className="font-semibold">ARRIVAL</p>
                        <input type="text" placeholder="26 November" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                        <p className="font-semibold">DEPARTURE</p>
                        <input type="text" placeholder="27 November" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5 md:pl-44">
                        <div className="">
                        <p className="font-semibold">STAR</p>
                        <input type="number" placeholder="Type number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                        <p className="font-semibold">ROOM</p>
                        <input type="number" placeholder="Type number" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <a className="btn bg-black mt-12 text-white rounded-full w-36">BOOK NOW</a>
                </div>
            </section>
            <section className="grid lg:p-24">
                <h1 className="text-3xl font-semibold mb-12 text-center">Testimonials</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 p-4 lg:p-0 md:p-4 text-center gap-5">
                    <div className="">
                        <div>
                            <img className="w-16 h-16 ml-36 mb-2" src={maskgroup} alt="" />
                        </div>
                        <div>
                            <h1 className="font-semibold mb-5">Corey Korsgaard</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, dignissimos quod officia!</p>
                        </div>
                    </div>
                    <div className="">
                        <img className="w-16 h-16 ml-36 mb-2" src={group171} alt="" />
                        <h1  className="font-semibold mb-5">Corey Korsgaard</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, dignissimos quod officia!</p>
                    </div>
                    <div className="">
                        <img className="w-16 h-16 ml-36 mb-2" src={group167} alt="" />
                        <h1 className="font-semibold mb-5">Corey Korsgaard</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, dignissimos quod officia!</p>
                    </div>
                </div>
            </section>
            <section className="text-center mb-12">
                <h1 className="lg:text-4xl text-2xl font-bold">Student Special: Discounted rates <br /> on tropical getaways!</h1>
                <p className="text-sm font-semibold mt-7">Let{"'"}s embody your beautiful ideas together, simplify the <br /> way you visualize your next big things.</p>
                <div className="lg:flex grid grid-cols-2 justify-between lg:p-24 mt-12 lg:mt-0 md:mt-12">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Sales and Refunds</p>
                    <p>Legal</p>
                    <p className="font-semibold">About</p>
                    <p className="font-semibold">Schedules</p>
                    <p className="font-semibold">Pricing</p>
                    <p className="font-semibold">Membership</p>
                    <p className="font-semibold">Joins</p>
                </div>
            </section>
        </div>
    );
};

export default Home;