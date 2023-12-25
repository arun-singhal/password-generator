import "./index.css";
import { IoReload } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("abc");

  const regeneratePassword = () => {
    setPassword("test");
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#319795]">
        <div className="w-1/3 h-2/3 bg-white rounded-lg">
          <div className="title font-bold text-center mt-10 text-lg">
            PASSWORD GENERATOR
          </div>
          <div className="title text-center mt-2">
            Ensure online account safety by creating strong and secure passwords
          </div>

          <div className="flex">
            <div className="flex password-generator rounded-md h-10 ml-10 border-2 w-2/3 justify-between">
              <div className="password pl-2 self-center">{password}</div>
              <div className="reload-icon pr-2 self-center">
                <IoReload onClick={regeneratePassword} />
              </div>
            </div>
            <div className="bg-[#319795] rounded-md font-bold ml-2 p-2">
              <div className="flex">
                <IoCopy className="self-center mr-2" /> Copy
              </div>
            </div>
          </div>


          <div>
            <div className="flex justify-between px-10 mt-20">
              <div>
                Uppercase
              </div>
              <div>
              <input type="checkbox" />
              </div>
            </div>

            <div className="flex justify-between px-10 mt-5">
              <div>
                Lowercase
              </div>
              <div>
              <input type="checkbox" />
              </div>
            </div>


            <div className="flex justify-between px-10 mt-5">
              <div>
                Number
              </div>
              <div>
              <input type="checkbox" />
              </div>
            </div>

            <div className="flex justify-between px-10 mt-5">
              <div>
                Special Characters
              </div>
              <div>
              <input type="checkbox" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
