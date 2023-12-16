const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-10">
      <h1 className="text-6xl font-bold text-center text-white font-sans">
        Why Choose <span className="grad2">Us?</span>
      </h1>
      <div className="flex flex-row w-[95%] bg-[#0F0F0F] text-white mt-10 p-14 rounded-3xl">
        {/* left */}
        <div className="flex flex-col gap-10 w-1/2">
          <div className="w-[40rem] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Instant Transaction</h2>
            <p>Transaction occurs within seconds and securely</p>
          </div>
          <div className=" flex flex-col gap-2 w-[35rem]">
            <h2 className="text-2xl font-bold">Negligible Charges</h2>
            <p>
              Unlike some Other platforms (like the wolf mask), we take less
              than 1% of the transaction fee and 0.35% over 1eth, You'll not
              even notice
            </p>
          </div>
          <div className="w-[30rem] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">No Reserves</h2>
            <p>
              We don't hold any of your money with ourselves, all transfers or
              the transaction doesn't occurs
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-10 w-1/2">
          <div className="w-[40rem] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Mass Payments</h2>
            <p>Pay To multiple addresses at the same time</p>
          </div>
          <div className="w-[35rem] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Support</h2>
            <p>
              Our staff always available for your support. You can contact us at
              9560335724 or nitinrana01125532553@gmail.com
            </p>
          </div>
          <div className="w-[35rem] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Automatic Withdrawl</h2>
            <p>
              You can Configure the default address for automatic withdrawls by
              a specific time period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
