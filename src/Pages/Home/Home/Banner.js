import React from "react";
import Chair from "../../../assets/images/chair.png"
const Banner = () => {
  return (
    <div className="my-40  hero bg-[url('/src/assets/images/bg.png')]">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={Chair}
          className="max-w-xl rounded-lg shadow-2xl"alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="text-white border-0 btn bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
