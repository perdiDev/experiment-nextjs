import {db} from "../firebase"
import {addDoc, collection, deleteDoc, doc} from 'firebase/firestore'

const addExpanse = async ({item, price}: {item: string, price: number}) => {
    try {
        await addDoc(collection(db, "expanse"), {
            item,
            price,
            createdAt: new Date().getTime()
        });
    } catch(err) {
        console.log(err);
    }
}

const deleteExpanse =async (docId:string) => {
    try {
        await deleteDoc(doc(db, "expanse", docId))
    } catch (error) {
        console.log(error);
    }
}

export {addExpanse, deleteExpanse};