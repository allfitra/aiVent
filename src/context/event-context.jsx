import React, { useContext, useEffect, useState } from "react";
import { db } from "../configs/firebase";
import { collection, getDocs } from "firebase/firestore";

const EventsContext = React.createContext();

export const useEvents = () => {
  return useContext(EventsContext);
};

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    const eventsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEvents(eventsData);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return <EventsContext.Provider value={events}>{children}</EventsContext.Provider>;
};
