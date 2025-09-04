import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Contribution({ section }) {
  return (
    <>
      <div ref={section} className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <h2 className="mb-6 lg:mb-8 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-center">
          Gift with PayPal or Venmo!
        </h2>
        <div className="flex justify-center">
          <a
            href="https://www.paypal.com/pool/9hpUf2q3FX?sr=accr"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 mr-4 px-8 py-4 text-md font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            {/* <CheckCircleIcon aria-hidden="true" className="-ml-0.5 size-5" /> */}
            PayPal
          </a>
          <a
            href="https://venmo.com/u/armandogutierrez4802"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 ml-4 px-8 py-4 text-md font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            {/* <CheckCircleIcon aria-hidden="true" className="-ml-0.5 size-5" /> */}
            Venmo
          </a>
        </div>
      </div>
    </>
  );
}
