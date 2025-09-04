'use client';

export default function Header({ section, scrollTo }) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-blue-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-blue-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-6 lg:pt-30 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            {/* <p className="text-base/7 font-semibold text-blue-600 text-center">Not sure what to buy me for my birthday?</p> */}
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Help Me Buy a New Saxophone
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                My birthday's coming up and I thought:
                {/* <p>
                  {' '}
                  Consider your contribution (big or small) as my
                  Birthday/Christmas present for the year.{' '}
                  <p>Thank you for being part of my musical journey!</p>
                </p> */}
              </p>
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                "This would be the best birthday present ever!"
              </p>
              {/* <p className="mt-2 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Thanks!
              </p> */}
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  onClick={() => scrollTo(section)}
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Make a contribution
                </a>
              </div>
            </div>

            <img
              alt="image of alto saxophone"
              src="https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg"
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}

// Links
/*
https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg

https://images.pexels.com/photos/7929649/pexels-photo-7929649.jpeg


https://upload.wikimedia.org/wikipedia/commons/3/3e/Yamaha_Saxophone_YAS-62.png
*/
