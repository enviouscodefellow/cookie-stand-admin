export default function StandForm({newCookieStandHandler}) {
  return (
    <form
      className="w-8/12 p-2 mx-auto my-4 bg-emerald-300 rounded-lg"
      onSubmit={newCookieStandHandler}
    >
      <h2 className="text-center">Create Cookie Stand</h2>
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
        </button>
      </div>
    </form>
  );
}
