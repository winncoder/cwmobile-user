import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../utils/FirebaseConfig';

export const fetchYogaClasses = (callback) => {
  const db = getDatabase(app);
  const yogaClassesRef = ref(db, "yoga_classes"); 

  onValue(yogaClassesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const classesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(classesArray);
    } else {
      callback([]);
    }
  });
};

export const fetchClassIntances = (callback) => {
    const db = getDatabase(app); 
    const classInstanceRef = ref(db, "class_instances"); 

    onValue(classInstanceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const classesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        callback(classesArray);
      } else {
        callback([]);
      }
    });
  };
