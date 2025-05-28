const DeliveryInformation = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="First name"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Last name"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full">
        <input
          type="email"
          placeholder="Email address"
          required
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>

      <div className="w-full">
        <input
          type="text"
          placeholder="Street Address"
          required
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="State"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="City"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Zipcode"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Country"
            required
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="w-full">
        <input
          type="tel"
          placeholder="Street Address"
          required
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>
    </>
  );
};

export default DeliveryInformation;
