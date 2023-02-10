import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

// export default function StandForm({ newCookieStandHandler }) {
//   const { user } = useAuth();
//   const { createResource } = useResource();

//   return (
//     <form
//       className="w-8/12 p-2 mx-auto my-4 bg-emerald-300 rounded-lg"
//       onSubmit={newCookieStandHandler}
//     >
//       <fieldset>
//         <legend className="text-center">Create Cookie Stand</legend>
//         <input
//           className="w-full rounded-lg mb-4"
//           placeholder="location"
//           name="location"
//         />
//         <input className="w-full" placeholder="minimum" name="minimum" />
//         <input className="w-full" placeholder="maximum" name="maximum" />
//         <input className="w-full" placeholder="average" name="average" />
//         <button>create</button>
//       </fieldset>
      {/* <h2 className="text-center">Create Cookie Stand</h2>
      <div className="container flex justify-between">
        <label className="mr-4" for="name">
          Location:
        </label>
        <input
          className="w-full rounded-lg mb-4"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="flex items-center justify-between m-1">
        <div className="flex flex-col items-center m-1">
          <label for="field1">Minimum Customers per Hour</label>
          <input
            className="w-full"
            type="number"
            id="minCusts"
            name="minCusts"
            defaultValue={2}
          />
        </div>
        <div className="flex flex-col items-center m-1">
          <label for="field2">Maximum Customers per Hour</label>
          <input
            className="w-full"
            type="number"
            id="maxCusts"
            name="maxCusts"
            defaultValue={4}
          />
        </div>
        <div className="flex flex-col items-center m-1">
          <label for="field3">Average Cookies per Sale</label>
          <input
            className="w-full"
            type="number"
            id="avgSale"
            name="avgSale"
            defaultValue={2.5}
          />
        </div>

        <button
          className="pt-5 pb-5 pl-20 pr-20 m-3 font-bold bg-emerald-500 rounded-lg"
          type="submit"
        >
          Create
        </button> */}
      {/* </div> */}
//     </form>
//   );
// }
export default function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
      event.preventDefault();
      const info = {
          location: event.target.location.value,
          minimum_customers_per_hour: parseInt(event.target.minimum.value),
          maximum_customers_per_hour: parseInt(event.target.maximum.value),
          average_cookies_per_sale: parseFloat(event.target.average.value),
          owner: user.id,
      };
      createResource(info);

  }

  return (
      <form className="w-8/12 p-2 mx-auto my-4 bg-emerald-300 rounded-lg" onSubmit={handleSubmit}>
          <fieldset>
              <legend>ADD LOCATION</legend>
              <input placeholder='Cookie Stand Location' name='location' />
              <button>CREATE STAND</button>
              <legend>MINIMUM CUSTOMERS PER HOUR</legend>
              <input placeholder='minimum' name='minimum' defaultValue={0}/>
              <legend>MAXIMUN CUSTOMERS PER HOUR</legend>
              <input placeholder='maximum' name='maximum' defaultValue={0}/>
              <legend>AVERAGE COOKIES PER SALE</legend>
              <input placeholder='average' name='average' defaultValue={0}/>
          </fieldset>
      </form>
  );
}