import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId
};

const initMyFirebase = () => {
  if (!getApps().length) {
    // Your web app's Firebase configuration
    const app = initializeApp(firebaseConfig)

    // creating auth for authentication
    const auth = getAuth(app);

    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) { 
        const analytics = getAnalytics(app);
        const performances = getPerformance(app);
      }
    }

    console.log("Initalized firebase")
  } else {
    console.log("Firebase already initialized")
  }
};

export default initMyFirebase;