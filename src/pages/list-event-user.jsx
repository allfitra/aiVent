import DataFromUser from "../components/table-event";
import { EventsProvider } from "../context/event-context";
import Footer from "../components/footer";
import Header from "../components/header";

function RequestUser() {
  return (
    <>
      <Header></Header>
      <EventsProvider>
        <DataFromUser></DataFromUser>
      </EventsProvider>
      <Footer></Footer>
    </>
  );
}

export default RequestUser;
