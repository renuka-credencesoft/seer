import React, { useState, useEffect, useCallback } from "react";
import "./index.css";
import ReactPlayer from "react-player";
import icon1 from "../../assets/images/icon.jpg";

import I2 from "../../assets/images/I2.png";
import I3 from "../../assets/images/I3.png";
import { client } from "../../ClientCreate/ClientCreate";

const VideoSection = () => {
  const [playing, setPlaying] = useState(true);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const [data, setData] = useState([])

  console.log(data, "kjkj")
  const getData = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: 'salesAndWastage' })
      // console.log(response ,"response")
      const responseData = response.items
      // console.log(responseData ,"fields")
      setData(responseData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className="container">
      <div className="headingContainer pt-12 ">
        <span
          className="lg:text-3xl text-lg font-bold text-white"
          style={{ fontFamily: "gothic-book" }}
        >
          Lost Sales and Wastage Cost Retailers Millions Annually.
        </span>
      </div>

      <div className="videoSectionContainer pb-20 -pt-10">
        <div className="videoSectionLeftSection ">
          <p
            style={{ fontFamily: "Comfortaa, sans-serif" }}
            className="lg:text-lg text-sm text-white "
          >

            {
              data.map((item, i) => {
                return (

               
                    <div className="flex item-start  items-center object-center">
                      <div className="mr-4">
                        <img
                          // src="/images/uploads/I1_white.svg"
                          src={`https:${item.fields?.img?.fields?.file?.url}`} 
                          alt=""
                          className="object-center w-1/5 mb-3"
                        />
                      </div>
                      <p
                        style={{ fontFamily: "roboto" }}
                        className="w-4/5 lg:text-lg md:text-xs  text-sm text-[#ffffff]  "
                      >
                        <span
                          style={{ fontFamily: "gothic-book" }}
                          className=" lg:text-lg md:text-sm  text-sm text-white "
                        >
                          <b>{item.fields.title}</b>
                        </span>{" "}

                        {item.fields?.description?.content?.[0]?.content?.[0]?.value}
                      </p>
                    </div>
           

                )
              })
            }
            {/* <div className="flex item-start  items-center object-center">
              <div className="mr-4">
                <img
                  src="/images/uploads/I1_white.svg"
                  alt=""
                  className="object-center w-1/5 "
                />
              </div>
              <p
                style={{ fontFamily: "roboto" }}
                className="w-4/5 lg:text-lg md:text-xs  text-sm text-[#ffffff]  "
              >
                <span
                  style={{ fontFamily: "gothic-book" }}
                  className=" lg:text-lg md:text-sm  text-sm text-white "
                >
                  <b>RETAIL IS PERVASIVE DETAIL:</b>
                </span>{" "}
                Every retailer, small to large, is awash with millions of
                inventory decisions, informed by time-consuming, manual analysis
                of vast swathes of data.
              </p>
            </div> */}

            {/* <div className="flex item-start  items-center object-center  py-4">
              <div className="mr-4">
                <img
                  src="/images/uploads/I2_white.svg"
                  alt=""
                  className="object-center w-1/5"
                />
              </div>
              <p
                style={{ fontFamily: "roboto" }}
                className="w-4/5 lg:text-lg md:text-sm  text-sm text-[#ffffff] "
              >
                <span
                  style={{ fontFamily: "gothic-book" }}
                  className=" para lg:text-lg md:text-xs  text-sm text-white "
                >
                  <b>THE COMPLEXITY IS MIND BOGGLING:</b>
                </span>{" "}
                It defeats even the largest, most experienced teams - who
                inevitably resort to crude calculations and compromises.
              </p>
            </div>

            <div className="flex item-start  items-center object-center  py-4 -mt-8">
              <div className="mr-4">
                <img
                  src="/images/uploads/I3_white.svg"
                  alt=""
                  className="object-center w-1/5"
                />
              </div>
              <p
                style={{ fontFamily: "roboto" }}
                className="w-4/5 lg:text-lg md:text-sm  text-sm text-[#ffffff] "
              >
                <span
                  style={{ fontFamily: "gothic-book" }}
                  className="lg:text-lg md:text-xs  text-sm text-white "
                >
                  <b>IT’S EXPENSIVE:</b>
                </span>{" "}
                Stock imbalances (usually excesses) result, requiring markdowns
                and inter-store transfers.
              </p>
            </div> */}
          </p>
        </div>

        <div className="videoSectionRightSection">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9uXpgjIF-3c"
            // playing={playing}
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;