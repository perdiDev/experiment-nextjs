"use client";

import { useEffect, useState } from "react";
import {addTodo} from "@/api/todo" 
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase";


export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [todos, setTodos] = useState([])

  const handleSubmit = async () => {
    console.log(title)
    const todo = {
        title,
        description,
        status,
    };
    console.log(todo)

    await addTodo(todo);
  }

  const refreshData = () => {
    const q = query(collection(db, "todo"))

    onSnapshot(q, (querySnapchot) => {
        let ar = [];
        querySnapchot.docs.forEach(doc =>{
            ar.push({id: doc.id, ...doc.data()});
        });
        console.log(ar)
        setTodos(ar)
    })
  }

  useEffect(() => {
    refreshData();
  }, [])

  return (
    <>
      <h1>To Do</h1>
      <div className="flex flex-col space-y-4 mx-24">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="text-blue-800"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="text-blue-800"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
          className="text-blue-800"
        />
        <button onClick={() => handleSubmit()}>Tambahkan</button>
      </div>
      <div className="mt-12">
    
        {todos && todos.map((todo) => (
            <div key={todo.id} class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-lg text-gray-100 font-medium title-font mb-2">{todo.title}</h2>
                <p class="leading-relaxed text-base">{todo.description}</p>
                </div>
            </div>

        ))}
      </div>
    </>
  );
}
