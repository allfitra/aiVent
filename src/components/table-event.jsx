import { useEffect, useState } from "react";
import { db } from "../configs/firebase";
import { onValue, ref, set } from "firebase/database";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

function DataFromUser() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "aiVents");
    onValue(dataRef, (snapshot) => {
      const eventData = snapshot.val();
      const eventList = eventData ? Object.values(eventData) : [];
      setEvents(eventList);
    });
  }, []);

  events.map((event) => console.log(event.id));

  // console.log(events);
  return (
    <div className="my-14 mx-14 rounded-3xl bg-gray-100 max-w-screen">
      <div className="flex flex-col items-center mb-2 mx-16">
        <div className="md:px-20 border-b-2 border-[#D9DBE9]">
          <h1 className="text-[#C98411] font-semi-bold text-ls md:text-3xl">List Event from User</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mx-auto max-w-screen-xl lg:py-3 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full rounded-xl text-sm text-left text-gray-2000 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-[#C98411] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image (url)
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    {event.eventName}
                  </th>
                  <td className="px-6 py-4">image link</td>
                  <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">{event.eventCategory}</td>
                  <td className="px-6 py-4 ">{event.eventDate}</td>
                  <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">{event.eventContact}</td>
                  <td className="px-6 py-4 ">{event.eventLocation}</td>
                  <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">
                    <Popup
                      trigger={
                        <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span class="relative py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Tampilkan deskripsi</span>
                        </button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="p-[30px] border-4 border-black rounded-lg shadow overflow-hidden hover:overflow-y-visible max-h-[500px] max-w-[800px] bg-white">
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita ullam nulla iusto eum nam enim, laboriosam voluptate quia iste error quod rem sunt nihil maxime autem vitae numquam. Ad earum natus nisi
                            voluptates animi, sapiente possimus neque quia labore velit repellendus veniam nobis. Dolorem est numquam labore vel repellat suscipit exercitationem, libero, ipsum obcaecati corporis voluptatum. Aperiam sapiente
                            sint error inventore tenetur commodi fugiat blanditiis nulla assumenda veritatis eum ratione quia doloremque rem, cupiditate consequatur voluptatum officia obcaecati ducimus veniam, labore fugit, vel architecto
                            praesentium. Optio, temporibus a, veritatis aliquid eaque qui nemo voluptatibus eum voluptate neque aliquam. Sit eligendi soluta voluptatibus inventore doloremque non dolore ipsum eveniet dolor delectus laborum
                            sunt odio aperiam dolorem ab, sint sed iste similique. Ad ipsum fuga nobis sequi illum, accusantium quis saepe hic sunt quidem consectetur recusandae libero alias blanditiis maiores. Voluptas itaque et non
                            ratione architecto odio aspernatur perferendis ullam est quam, nemo natus cumque hic dolores eligendi quis ea modi adipisci? Cum iusto sunt placeat unde corrupti. Voluptatum eum labore dolores recusandae a unde
                            numquam ipsam architecto adipisci obcaecati illo voluptatem, temporibus minima eveniet! Beatae est esse id quibusdam illo odit modi harum laboriosam ipsam quidem dolorem nesciunt ipsa nisi accusamus similique
                            dolorum in voluptatibus blanditiis enim officia expedita, reiciendis exercitationem? Sed aut sit commodi molestiae ea ducimus nemo! Adipisci placeat repellendus facere repudiandae a quos ullam corrupti fugit
                            dolore odit fugiat perferendis minima consequatur maiores, amet natus dolorem eaque eius soluta eum blanditiis! Nostrum illum, consequatur et velit quos, impedit laboriosam deserunt veritatis ipsam obcaecati
                            voluptatem porro optio quidem, recusandae doloremque tempore exercitationem deleniti tempora nihil. Maiores corrupti possimus, fuga quo enim culpa porro natus expedita quas aspernatur dicta nobis velit
                            laboriosam, saepe doloremque labore adipisci non, optio asperiores. Debitis provident sit ipsam, esse dolores repellat a nam reprehenderit natus dolor, ullam atque accusantium placeat tempore ducimus impedit
                            doloremque unde laudantium tempora ut? Debitis, non voluptatibus doloremque sequi obcaecati vel, soluta possimus quasi earum beatae quod libero maxime ipsam deleniti? Debitis repellat error tempore sed labore
                            adipisci, ab fuga, autem harum itaque reiciendis nobis pariatur id, qui et doloribus dolores commodi soluta suscipit fugit modi aspernatur laboriosam omnis. Alias blanditiis dolore quia expedita. Sed ipsum minus,
                            error, voluptatum eum hic omnis asperiores ratione optio distinctio illum reprehenderit repellat nulla tempore nam amet cupiditate nobis nemo, animi deserunt possimus. Quae impedit sed ipsam itaque corporis
                            cupiditate corrupti ipsum quis adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et vitae culpa reprehenderit at autem, sunt molestiae eaque consequatur officiis illum voluptatum magni ipsa
                            explicabo ex, ab facilis deleniti voluptate libero repudiandae quod. Ducimus culpa temporibus laboriosam sapiente blanditiis molestiae? Voluptatibus atque amet dolores dolor doloribus dicta dolore, totam quas
                            dignissimos possimus, earum provident explicabo. Laboriosam quos numquam dolore dolor suscipit vero architecto sint inventore obcaecati nisi minus, facere minima et nostrum id quis, voluptate modi temporibus
                            dolorum repudiandae nam. Recusandae a at, molestiae tenetur sapiente suscipit enim voluptate delectus ea dolorem, ad porro! Voluptatum iure eaque nemo modi enim architecto nisi temporibus culpa ullam quisquam.
                            Ratione excepturi corrupti cum dolorem ad doloremque blanditiis sit, sed cumque aliquam voluptates quibusdam? Est tempora suscipit eum voluptatem consequatur voluptate dolorum vitae. Dolore perferendis nesciunt
                            culpa adipisci? Ea voluptates suscipit, incidunt deleniti natus officiis cupiditate sit quaerat. Voluptatibus veniam deleniti natus unde magni dicta adipisci dolore explicabo itaque eius obcaecati porro quisquam,
                            sunt dolorem. Modi, magnam nihil beatae culpa ad soluta sit? Deleniti quibusdam, explicabo totam quam qui necessitatibus! Assumenda saepe aperiam magni. Iste quibusdam in repellat dolorem adipisci illum, odio quo
                            expedita excepturi ab. Similique, id culpa. Suscipit nesciunt consequatur voluptatum architecto omnis eligendi, perferendis ratione cum, quisquam atque placeat praesentium labore consectetur alias nulla delectus
                            hic beatae dolorem repudiandae laboriosam? Dicta rem exercitationem aspernatur aut reprehenderit optio aliquid ipsam voluptate pariatur commodi laborum, tempore fugiat ipsa dolorem voluptates corporis harum velit
                            minima architecto veritatis amet cupiditate! Totam natus eum vero odit, deserunt culpa explicabo nostrum sed accusantium exercitationem maxime iure. Repudiandae beatae magni non obcaecati officiis sequi, autem
                            quas voluptatibus esse pariatur. Nesciunt dolor incidunt blanditiis architecto? Voluptatibus excepturi expedita in ea non ratione, quae culpa voluptatum beatae accusantium impedit, maxime modi, reprehenderit
                            officia illum. Quam perspiciatis sunt quos voluptatibus atque facere unde amet placeat fugit, neque quasi illo ipsum nihil eligendi nesciunt enim? Saepe, omnis quod, assumenda natus incidunt facere consequuntur
                            nam voluptate id cum explicabo facilis dolor nostrum nisi nihil doloribus quos in voluptatum magni, aperiam laboriosam! Doloribus, exercitationem neque minima perspiciatis odio alias libero animi nihil impedit,
                            consectetur sunt, quod illo optio quo in aspernatur accusantium delectus. Repellendus atque culpa tempora laborum, consectetur minima maxime similique reprehenderit quae fugiat non mollitia fugit, assumenda
                            delectus. Voluptatem quia necessitatibus recusandae, nulla quibusdam impedit eveniet voluptatum pariatur dolor laborum eligendi maxime tenetur? Doloribus reiciendis laborum ad in vero possimus officia similique!
                          </p>
                          <a
                            onClick={close}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:cursor-pointer text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Close
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </Popup>
                  </td>
                </tr>
              ))}
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Phone</td>
                <td className="px-6 py-4">$799</td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Wearables</td>
                <td className="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataFromUser;
