import "./App.css";
import LogoReaction from "./images/icon-reaction.svg";
import MemoryLogo from "./images/icon-memory.svg";
import VerbalLogo from "./images/icon-verbal.svg";
import VisualLogo from "./images/icon-visual.svg";

function App() {
  return (
    <main>
      <div className="main-wrapper min-h-screen w-full flex flex-col justify-start item-center md:justify-center md:items-center lg:justify-center lg:items-center">
        <div className="box-wrapper w-full md:w-[45rem] lg:w-[45rem] md:shadow-2xl md:flex md:rounded-r-2xl lg:shadow-2xl lg:flex lg:rounded-r-3xl">
          <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] rounded-b-3xl m-0 py-3 px-8 md:rounded-3xl lg:w-1/2 lg:rounded-2xl lg:px-14">
            <h1 className="font-semibold text-slate-200 text-center text-lg lg:text-2xl">
              Your Result
              <div className="cirle p-7 w-36 bg-gradient-to-b from-[#4E21CA]/90 to-[#2421CA]/10 rounded-full text-center my-3 mx-auto lg:w-48 lg:p-12 lg:my-8 lg:flex lg:flex-col justify-center items-center">
                <p className="text-6xl text-white font-bold lg:text-7xl">
                  76
                  <span className="block text-slate-400 text-base">of 100</span>
                </p>
              </div>
              <p className="text-2xl text-white mb-2 lg:text-3xl">Great</p>
              <p className="text-slate-400 text-base text-center font-extralight mb-5">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </h1>
          </div>

          <div className="box-wrapper m-0 flex flex-col justify-start items-start p-4 w-full lg:w-1/2 lg:p-7 ">
            <h2 className="font-semibold text-lg lg:text-xl">Summary</h2>
            <ul className="w-full">
              <li>
                <div className="flex justify-start items-center py-5 p-3 bg-lightRed/10 w-full h-auto my-3 rounded-md lg:rounded-lg">
                  <img
                    src={LogoReaction}
                    alt="reaction"
                    className="justify-self-center mr-3"
                  />
                  <p className="font-semibold text-lg text-lightRed">
                    Reaction
                  </p>

                  <p className="ml-auto text-lg font-semibold text-darkGrayBlue">
                    80 <span className="text-slate-400">/ 100 </span>
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center py-5 p-3 bg-orangeYellow/10 w-full h-auto my-3 rounded-md lg:rounded-lg">
                  <img
                    src={MemoryLogo}
                    alt="reaction"
                    className="justify-self-center mr-3"
                  />
                  <p className="font-semibold text-lg text-orangeYellow">
                    Memory
                  </p>

                  <p className="ml-auto text-lg font-semibold text-darkGrayBlue">
                    92 <span className="text-slate-400">/ 100 </span>
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center py-5 p-3 bg-greenTeal/10 w-full h-auto my-3 rounded-md lg:rounded-lg">
                  <img
                    src={VerbalLogo}
                    alt="reaction"
                    className="justify-self-center mr-3"
                  />
                  <p className="font-semibold text-lg text-greenTeal">Verbal</p>

                  <p className="ml-auto text-lg font-semibold text-darkGrayBlue">
                    61 <span className="text-slate-400">/ 100 </span>
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center py-5 p-3 bg-cobaltBlue/10 w-full h-auto my-3 rounded-md lg:rounded-lg">
                  <img
                    src={VisualLogo}
                    alt="reaction"
                    className="justify-self-center mr-3"
                  />
                  <p className="font-semibold text-lg text-cobaltBlue">
                    Visual
                  </p>

                  <p className="ml-auto text-lg font-semibold text-darkGrayBlue">
                    72 <span className="text-slate-400">/ 100 </span>
                  </p>
                </div>
              </li>
            </ul>

            <button className="transition duration-500 bg-darkGrayBlue text-center p-5 rounded-full text-white font-semibold w-full text-lg mt-4 hover:bg-gradient-to-b from-[#4E21CA]/100 to-[#2421CA]/90 lg:p-3 md:p-3">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
