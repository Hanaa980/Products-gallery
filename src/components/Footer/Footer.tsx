export default function Footer() {
  return (
    <>
      <div className="mt-10 flex flex-col items-center w-full bg-gray-200 dark:bg-gray-900 gap-3 py-5 ">
        <h4 className="text-2xl font-bold ">ELEGANCE</h4>
        <div className=" flex flex-col items-center gap-3 text-gray-800 dark:text-gray-300 w-full">
          <p className="px-2">The Future of online shopping,curated for the modern individual</p>
          <div className="icons flex gap-4 text-xl ">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <hr className="text-black dark:text-white w-full" />
          <p >
            <i className="fa fa-copyright"></i> 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
