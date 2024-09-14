"use client";
import Image from "next/image";
import blueImg from "@/assets/Blue umbrella.png"
import pinkImg from "@/assets/Pink umbrella.png"
import yellowImg from "@/assets/Yello umbrella.png"
import { FiUpload } from "react-icons/fi";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";






export default function Home() {
  const [color, setColor] = useState("blue");
  const fileRef = useRef<HTMLInputElement>(null);
  const [logoImg, setLogoImg] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("UPLOAD LOGO");
  const [backgroundColor, setBackgroundColor] = useState<string>("white");

  const handleFileChange = () => {
    let file = fileRef?.current?.files?.[0];

    if (file) {
      setLogoImg(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }



  return (
    <div className="h-[100vh] flex justify-center items-center" style={{ backgroundColor }}>
      <div>
        <div className="flex justify-center space-x-40 relative">
          {color == "blue" &&
            <Image
              className=""
              src={blueImg}
              alt="Umbrella"
              width={280}
              height={100}
              priority
            />}
          {color == "pink" &&
            <Image
              className=""
              src={pinkImg}
              alt="Umbrella"
              width={280}
              height={100}
              priority
            />}
          {color == "yellow" &&
            <Image
              className=""
              src={yellowImg}
              alt="Umbrella"
              width={280}
              height={100}
              priority
            />}

          {logoImg &&
            <Image
              src={logoImg}
              alt="logo"
              className="h-5 w-10 absolute top-[250px] left-[-17px]  transform -translate-x-1/2 z-10"
              height={100}
              width={100} />}



          <div>
            <div className="text-center mt-10 text-4xl font-bold mb-9">Custom Umbrella</div>
            <div className="">
              <div className="flex gap-3 justify-center mb-8">
                <button onClick={() => { setColor("pink"); setBackgroundColor("#fbc9e6") }} className="bg-pink-600 rounded-full h-5 w-5 focus:ring-4 focus:outline-none focus:ring-pink-300 focus:h-4 focus:w-4"></button>
                <button onClick={() => { setColor("blue"); setBackgroundColor("#d8f2fb") }} className="bg-blue-600 rounded-full h-5 w-5 focus:ring-4 focus:outline-none focus:ring-blue-400 focus:h-4 focus:w-4"></button>
                <button onClick={() => { setColor("yellow"); setBackgroundColor("#ffe3c0") }} className="bg-yellow-500 rounded-full h-5 w-5 focus:ring-4 focus:outline-none focus:ring-yellow-300 focus:h-4 focus:w-4"></button>
              </div>
              <div className="mb-3">
                <div className="font-bold text-lg">Customize your  umbrella</div>
                <div className="text-sm mb-2">Upload a logo for an instant preview.</div>
                <div className="text-xs">.png and .jpg files only.Max file size is 5MB.</div>
              </div>

              {color == "pink" &&
                <div className="w-full bg-pink-500 h-10 flex items-center">
                  <label htmlFor="upload">
                    <FiUpload className="ml-3 h-6 w-6 text-white" />
                  </label>
                  <div className="ml-[25%] text-white text-sm font-semibold">{logoImg ? fileName : "UPLOAD LOGO"}</div>
                  {logoImg && <button onClick={() => { setLogoImg(null); setFileName("UPLOAD LOGO") }} ><IoMdClose className="text-white ml-14 h-6 w-6" /></button>}
                </div>}

              {color == "blue" &&
                <div className="w-full bg-blue-600 h-10 flex items-center">
                  <label htmlFor="upload">
                    <FiUpload className="ml-3 h-6 w-6 text-white" />
                  </label>
                  <div className="ml-[25%] text-white text-sm font-semibold">UPLOAD LOGO</div>
                  {logoImg && <button onClick={() => setLogoImg(null)} ><IoMdClose className="text-white ml-14 h-6 w-6" /></button>}
                </div>}

              {color == "yellow" &&
                <div className="w-full bg-yellow-500 h-10 flex items-center">
                  <label htmlFor="upload">
                    <FiUpload className="ml-3 h-6 w-6 text-white" />
                  </label>
                  <div className="ml-[25%] text-white text-sm font-semibold">UPLOAD LOGO</div>
                  {logoImg && <button onClick={() => setLogoImg(null)} ><IoMdClose className="text-white ml-14 h-6 w-6" /></button>}
                </div>}
            </div>

          </div>
        </div>

        <input type="file" className="opacity-0" name="avatar" id="upload" onChange={handleFileChange} ref={fileRef} accept="image/png, image/jpeg" />
      </div>

    </div>

  );
}
