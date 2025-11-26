"use client";

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "@/firebase/firebase"; // নিশ্চিত করুন এই পাথটি ঠিক আছে

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Utility function to create a clean user object
const createCleanUserObject = (firebaseUser) => {
  if (!firebaseUser) return null;
  
  // Get displayName, falling back to email prefix if not available
  const displayName = firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User";
  
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || null, // নিশ্চিত করা হলো যে email প্রপার্টি থাকছে
    displayName: displayName,
    // আপনি চাইলে আরও প্রপার্টি যোগ করতে পারেন
  };
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Auth Functions ---

  const createUser = async (email, password, name) => {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (name) await updateProfile(res.user, { displayName: name });
    setUser(createCleanUserObject(res.user));
    setLoading(false);
    return res.user;
  };

  const login = async (email, password) => {
    setLoading(true);
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(createCleanUserObject(res.user));
    setLoading(false);
    return res.user;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const res = await signInWithPopup(auth, googleProvider);
    
    // নিশ্চিতভাবে clean user object সেট করা
    const cleanUser = createCleanUserObject(res.user);
    setUser(cleanUser); 
    
    setLoading(false);
    return res.user; // Firebase User object রিটার্ন করা হলো
  };

  const updateUser = async (name) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
      setUser(createCleanUserObject(auth.currentUser));
    }
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  const forgotPassword = (email) => {
    if (!email) return alert("Please provide an email");
    return sendPasswordResetEmail(auth, email);
  };

  // --- Auth State Listener ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // setLoading(true); // removed to avoid flicker on existing user
      if (currentUser) {
        setUser(createCleanUserObject(currentUser));
      } else {
        setUser(null);
      }
      setLoading(false); // set loading false once state is resolved
    });
    return () => unsubscribe();
  }, []);
  
  // console.log(user) // For debugging: Check final user object

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        createUser,
        login,
        loginWithGoogle,
        updateUser,
        logOut,
        forgotPassword,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;