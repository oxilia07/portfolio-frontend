import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAQkOZwXpKhRWuiyAPeeRWhTa4jX7Imdic',
  authDomain: 'oxilia-kosegeran.firebaseapp.com',
  databaseURL: 'https://oxilia-kosegeran-default-rtdb.firebaseio.com',
  projectId: 'oxilia-kosegeran',
  storageBucket: 'oxilia-kosegeran.firebasestorage.app',
  messagingSenderId: '216002950584',
  appId: '1:216002950584:web:36caa64a6194239c17cb4d',
  measurementId: 'G-E381BV5LJE'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Fetches the Base64 string of an image from Firestore.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The document ID of the image.
 * @returns {Promise<string | null>} - The Base64 string of the image, or null if not found.
 */
const fetchImageBase64 = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { imageBase64 } = docSnap.data();
      return imageBase64; // Return the Base64 string
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

export default fetchImageBase64;
