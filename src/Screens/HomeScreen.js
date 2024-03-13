import React, { useEffect, useState } from "react";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeScreen = () => {
  const [value, setValue] = useState("");
  const [Items, setItems] = useState([]);
  const [cross, setCross] = useState(false);

  useEffect(() => {
    let fromlocal = JSON.parse(localStorage.getItem("valuess"));
    console.log(fromlocal);
    if (fromlocal == null) {
      setItems([]);
    } else {
      setItems(fromlocal);
    }
  }, []);
  




  const onclickHandler = () => {
    if (value == "") {
        toast('plese add something here...', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }else{
        let newData = [...Items ,{"name" : value}]
        setItems(newData)
        localStorage.setItem("valuess", JSON.stringify(newData));
        toast.success('Added sucsses ', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
            });
            setValue('')
    }

   
  };

  const deletHandler=(idx)=>{
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    let newData = [...Items]
    let deletefilter = newData.filter((e,i)=>{
        return idx != i
    })

    setItems(deletefilter)
  }

  return (
    <div>
           <ToastContainer />
      <section className="max-w-screen-xl w-screen mx-auto h-screen ">
        <div className="flex justify-center align-middle">
          <div className="shadow bg-red-300 mt-40 rounded-md w-[400px] p-8 ">
            <h1 className="text-center text-2xl font-semibold py-4 text-black">
              Grocery Bud
            </h1>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              className="rounded px-2 py-2 mr-4"
            />
            <button
              onClick={onclickHandler}
              className="py-2 px-4 active:bg-blue-500 active:text-white bg-blue-600 border rounded"
            >
              Add Item
            </button>
            
            <div className="my-8">
              <ul>
                {Items.map((e, i) => {
                  return (
                    <li className="flex  justify-between align-middle px-2 py-1">
                      <div>
                        <input
                          type="checkbox"
                          onClick={() => setCross(!cross)}
                          className="linethrough"
                        />{" "}
                        <span className="texthere"> {e.name}</span>
                      </div>
                      <div>
                        <button onClick={()=>deletHandler(i)} className="bg-black p-1 rounded text-white">
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
