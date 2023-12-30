"use client";
import { addExpanse, deleteExpanse } from "@/api/expanse";
import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

type Expanse = {
    id: string,
    item: string,
    price: number
}

export default function ExpanseTracker() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expanses, setExpanses] = useState<Expanse[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!item || !price) {
        alert("Isi semuanya")
        return;
    }
    setLoading(true);
    

    const newExpanse = {
      item,
      price,
    };


    await addExpanse(newExpanse);
    // console.log(newExpanse)

    setItem("");
    setPrice(0);
    setLoading(false);
  };

//   const refreshData = () => {
//     const q = query(collection(db, "todo"));

//     onSnapshot(q, (querySnapshot): any => {
//         let allExpanse: any = []
//         querySnapshot.forEach((doc) => {
//             allExpanse.push({id: doc.id, ...doc.data})
//         })
//         setExpanses(expanses);
//         console.log(expanses)
//     })
//   }

  const refreshData = () => {
    const q = query(collection(db, "expanse"))

    onSnapshot(q, (querySnapshot) => {
        let ar: any = [];
        querySnapshot.docs.forEach(doc =>{
            ar.push({id: doc.id, ...doc.data()});
        });
        setExpanses(ar)
    })
  }

  const handelDeleteExpanse = async (id: string) => {
        await deleteExpanse(id);
  }

  useEffect(() => {
    refreshData()
  }, [])

  return (
    <>
      <div className="p-24 flex flex-col w-full items-center">
        <h1 className="font-bold text-lg w-fit mb-4">Expanse Tracker</h1>
        <form className="flex space-x-1 min-w-[32rem]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="p-2 border border-blue-950 w-3/4 rounded-lg"
            name=""
            id=""
          />
          <input
            type="number"
            placeholder="$"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="p-2 border border-blue-950 w-1/5 rounded-lg"
            name=""
            id=""
          />
          <button
            disabled={loading}
            type="submit"
            className="w-[8%] bg-blue-950 rounded-lg text-white font-bold text-xl hover:bg-[#0f172d] disabled:bg-gray-600"
          >
            +
          </button>
        </form>
        <div className="space-y-[1px]">
            {expanses &&
                expanses.map((expanse) => (
                    <div key={expanse.id} className="flex min-w-[32rem] mt-4 bg-blue-950 text-white font-medium rounded-lg">
                        <div className="flex w-full justify-between px-4 py-2 border-r-2 border-gray-950">
                            <span>{expanse.item}</span>
                            <span>${expanse.price}</span>
                        </div>
                        <button className="hover:bg-gray-900 px-4 rounded-lg" onClick={() => handelDeleteExpanse(expanse.id)}>X</button>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
}
