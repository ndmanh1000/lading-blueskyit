import React, { useState } from "react";
import php from "../../assets/images/php.png";
import js from "../../assets/images/js.png";
import sql from "../../assets/images/sql.png";
import swift from "../../assets/images/swift.png";
import python from "../../assets/images/python.png";
import ccc from "../../assets/images/ccc.png";
import type from "../../assets/images/type.png";
import java from "../../assets/images/java.png";
import ruby from "../../assets/images/ruby.png";
import react from "../../assets/images/react.png";
import lavarel from "../../assets/images/lavarel.png";
import boot from "../../assets/images/boot.png";
import sqlse from "../../assets/images/sqlse.png";
import mongo from "../../assets/images/mongo.png";
import heo from "../../assets/images/heo.svg";
import gra from "../../assets/images/gra.svg";
import goo from "../../assets/images/goo.png";
import nodejs from "../../assets/images/nodejs.png";
import docker from "../../assets/images/docker.png";
import doo from "../../assets/images/doo.png";
import kotin from "../../assets/images/kotin.svg";
import angu from "../../assets/images/angu.png";
import android from "../../assets/images/android.png";
import aws from "../../assets/images/aws.png";
import brave from "../../assets/images/brave.png";
import codeig from "../../assets/images/codeig.png";
import flu from "../../assets/images/flu.png";
import gcloud from "../../assets/images/gcloud.png";
import jque from "../../assets/images/jque.png";
import npmm from "../../assets/images/npmm.png";
import sass from "../../assets/images/sass.png";
import vim from "../../assets/images/vim.png";
import vuejs from "../../assets/images/vuejs.png";
export default function Tabss() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto cursor-pointer">
      <div className="grid grid-cols-2 lg:grid-cols-9 p-2 cursor-pointer w-full rounded-lg bg-[#dbf4ff] lg:h-[4.875rem] items-center lg:flex lg:items-center lg:justify-between justify-between">
        <button
          className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-[8px] ${
            activeTab === 0
              ? "bg-[#27C6FF] text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Web Platfom
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-[8px] ${
            activeTab === 1
              ? "bg-[#27C6FF] text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Database
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-[8px] ${
            activeTab === 2
              ? "bg-[#27C6FF] text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Cloud & DevOps
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-[8px] ${
            activeTab === 3
              ? "bg-[#27C6FF] text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab(3)}
        >
          Mobile Apps
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium cursor-pointer rounded-[8px] ${
            activeTab === 4
              ? "bg-[#27C6FF] text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab(4)}
        >
          Other Frameworks
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4 p-4">
        {/* Display multiple images for each tab */}
        {activeTab === 0 && (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mx-auto items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <img src={php} alt="php" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>PHP</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={js} alt="js" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={sql} alt="sql" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={swift} alt="sw" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Swift</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={python} alt="py" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ccc} alt="ccc" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>C++</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={type} alt="type" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Typescript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={java} alt="java" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Java</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ruby} alt="ruby" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Ruby</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={react} alt="re" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Swift</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={lavarel} alt="la" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Laravel</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={boot} alt="bo" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Boostrap</p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mx-auto items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <img src={sqlse} alt="se" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>SQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mongo} alt="mo" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Mongodb</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={sql} alt="sql" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={heo} alt="heo" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={gra} alt="gra" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Graphql</p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mx-auto items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <img src={goo} alt="goo" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Go</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={js} alt="js" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={nodejs}
                alt="nodejs"
                className="lg:w-[8rem] lg:h-[9rem]"
              />
              <p>NodeJS</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={doo} alt="doo" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Docker</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={python} alt="py" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ruby} alt="rb" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Ruby</p>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mx-auto items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <img src={java} alt="ja" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Java</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={js} alt="js" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={swift} alt="sw" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Swift</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={python} alt="py" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ruby} alt="rb" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Ruby</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={kotin} alt="kt" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Koltin</p>
            </div>
          </div>
        )}

        {/* Add similar sections for other tabs */}
        {activeTab === 4 && (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mx-auto items-center justify-center px-5">
            <div className="flex flex-col items-center">
              <img src={angu} alt="angu" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Angular</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={android}
                alt="android"
                className="lg:w-[8rem] lg:h-[9rem]"
              />
              <p>Android</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={aws} alt="aws" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Aws</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={brave}
                alt="brave"
                className="lg:w-[8rem] lg:h-[9rem]"
              />
              <p>Brave</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={codeig}
                alt="codeig"
                className="lg:w-[8rem] lg:h-[9rem]"
              />
              <p>Codeigniter</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={flu} alt="flu" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Flutter</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={gcloud} alt="gc" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Gcloud</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={jque} alt="jque" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Jquery</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={npmm} alt="npmm" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Npm</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={sass} alt="sass" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Sass</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={vim} alt="vim" className="lg:w-[8rem] lg:h-[9rem]" />
              <p>Vim</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={vuejs}
                alt="vuejs"
                className="lg:w-[8rem] lg:h-[9rem]"
              />
              <p>Vuejs</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
