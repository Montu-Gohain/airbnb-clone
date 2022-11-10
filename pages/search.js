import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infocard from "../components/Infocard";
import Map from "../components/Map";

function search({ searchResults }) {

  const router = useRouter();
  
  // console.log(searchResults);
  // Todo:  Using ES6 Destructuring...

  const { location, startDate, endDate, noOfGuest} = router.query; 

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  

  return (
    <div className="h-screen">
        <Header placeholder={`${location} | ${range} | ${noOfGuest}`}/>
        
        <main className="flex">
            <section className="flex-grow top-14 px-6 pt-14">
              <p className="text-xs">300+ Stays - {range} - for {noOfGuest} guests</p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                 <p className="button">Cancellation Flexibility</p>
                 <p className="button">Type of Place</p>
                 <p className="button">Price</p>
                 <p className="button">Rooms and Beds</p>
                 <p className="button">More Filters</p>
              </div>

              <div className="flex flex-col">

                  {searchResults.map(({img, location, title, description, star, price,total}) => (
                    <Infocard  
                      key={img}
                      img={img}
                      location={location}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                      title={title}
                    />
                ))}
              </div>

            </section>

            <section className="hidden md:inline-flex lg:min-w-[600px]">
              <Map searchResults={searchResults}/>
            </section>
        </main>

        <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").
  then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}
