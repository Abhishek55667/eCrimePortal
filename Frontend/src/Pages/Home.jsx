import React from "react";
import Options from "../Components/Options";
import axios from "axios";
import News from "../Components/News";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const option = [
  { title: "Register your complaint" },
  { title: "Track your complaint" },
  { title: "Child Abuse" },
  { title: "Cyber Crime" },
  { title: "Child Abuse" },
  { title: "Other" },
];

const Home = (props) => {
  return (
    <div className="flex text-black">
      <div className="p-15  h-full ">
        <h1 className='font-extrabold text-5xl text-center w-full h-70 p-4 bg-[url("https://i.pinimg.com/1200x/22/33/79/22337924d95f01dde8b8a01dc988302d.jpg")] bg-no-repeat bg-contain bg-center flex justify-center items-center pb-10'>
          Online Complaint Against Crime
        </h1>

        <p className="p-2">
          This portal is an initiative of Government of India to facilitate
          victims/complainants to report cyber crime complaints online. This
          portal caters to complaints pertaining to cyber crimes only with
          special focus on cyber crimes against women and children. Complaints
          reported on this portal are dealt by law enforcement agencies/ police
          based on the information available in the complaints. It is imperative
          to provide correct and accurate details while filing complaint for
          prompt action. Please contact local police in case of an emergency or
          for reporting crimes other than cyber crimes. National police helpline
          number is 112. National women helpline number is 181 and Cyber Crime
          Helpline is 1930.
        </p>

        <div className="pt-5 ">
          <div className="w-7xl h-90  flex p-7 items-end  rounded-4xl bg-blue-400 text-white">
            <div className="w-1/2 h-full p-4 flex ">
              <img
                src="https://i.pinimg.com/1200x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg"
                alt=""
                className="rounded-3xl w-full"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center">
              <div>
                <h2 className="text-center text-3xl font-bold pb-5">
                  Register your Complaint
                </h2>
                <p className="p-3">
                  The portal strengthens child protection mechanisms by
                  leveraging technology to streamline reporting, reduce barriers
                  to justice, and enhance accountability. It serves as both a
                  preventive and corrective tool in combating child abuse,
                  ensuring that every case is addressed with urgency,
                  sensitivity, and professionalism.
                </p>
              </div>
              <div className="flex justify-end items-end pt-7 p-5">
                <button className="bg-black text-white  pl-4 pr-2 py-3 rounded-2xl flex items-center">
                  <Link to={"/ComplaintRegister"}>Register Complaint</Link>
                  <Link className="pl-1" to={"/ComplaintRegister"}>
                    {" "}
                    <MdKeyboardArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-end pt-4">
          <div className="w-7xl h-90  flex flex-row p-7 items-end bg-amber-950 rounded-4xl text-white ">
            <div className=" w-1/2 h-full flex justify-center flex-col">
              <div>
                <h2 className="text-center text-3xl font-bold pb-5">
                  Child Abuse
                </h2>
                <p className="p-3">
                   The portal strengthens child protection mechanisms by
                  leveraging technology to streamline reporting, reduce barriers
                  to justice, and enhance accountability. It serves as both a
                  preventive and corrective tool in combating child abuse,
                  ensuring that every case is addressed with urgency,
                  sensitivity, and professionalism.
                </p>
              </div>
              <div className="flex justify-end items-end pt-7 p-5">
                <button className="bg-black text-white  px-2 py-3 rounded-2xl flex items-center">
                  <Link to={"/ComplaintRegister"}>Register Complaint</Link>
                  <Link className="pl-2" to={"/ComplaintRegister"}>
                    {" "}
                    <MdKeyboardArrowRight />
                  </Link>
                </button>
              </div>
            </div>

            <div className=" w-1/2 h-full text-center flex">
              <img
                src="https://i.pinimg.com/1200x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg"
                alt=""
                className="rounded-3xl "
              />
            </div>
          </div>
        </div>

        <div className="w-7xl h-90  flex p-7 items-end mt-4 rounded-4xl  bg-amber-400">
          <div className="w-1/2 h-full p-3.5 flex ">
            <img
              src="https://i.pinimg.com/1200x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg"
              alt=""
              className="rounded-3xl "
            />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center">
            <div>
              <h2 className="text-center text-3xl font-bold pb-5">
                Child Abuse
              </h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum natus iusto ipsam! Consequuntur, odit animi, magni
                laudantium beatae quibusdam numquam incidunt voluptatem aut
                eveniet earum repellendus fugit iusto magnam hic!
              </p>
            </div>
            <div className="flex justify-end items-end pt-7 p-5">
              <button className="bg-black text-white  px-2 py-3 rounded-2xl flex items-center">
                <Link to={"/ComplaintRegister"}>Register Complaint</Link>
                <Link className="pl-2" to={"/ComplaintRegister"}>
                  {" "}
                  <MdKeyboardArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
