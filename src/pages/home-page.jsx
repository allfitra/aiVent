import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeContent from "../components/home-content";
import { EventsProvider } from "../context/event-context";

function HomePage() {
  return (
    <>
      <Header></Header>
      <EventsProvider>
        <HomeContent></HomeContent>
      </EventsProvider>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
