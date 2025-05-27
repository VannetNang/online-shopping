const DeliveryInformation = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="First name"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Last name"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full">
        <input
          type="email"
          placeholder="Email address"
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>

      <div className="w-full">
        <input
          type="text"
          placeholder="Street Address"
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="State"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="City"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Zipcode"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Country"
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full">
        <input
          type="tel"
          placeholder="Street Address"
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>
    </>
  );
};

export default DeliveryInformation;
