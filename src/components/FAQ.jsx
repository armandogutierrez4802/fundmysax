import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Why did my contribution not move the progress bar?',
    answer: 'I have to update that manually! Please check back in a day or two.',
  },
  {
    question: 'Why a new saxophone?',
    answer:
      "My saxophone is old and worn out. I bought it used for $250 in 2008. It's time for an upgrade!",
  },
  {
    question: 'What do I get if I contribute?',
    answer:
      "I'll take any song requests and send you a personalized video! Otherwise, consider your contribution as a gift for my birthday.",
  },
  {
    question: 'How much should I contribute?',
    answer: 'Whatever you want! Anything helps.',
  },
  {
    question: 'Why not fix your old saxophone?',
    answer:
      'It’s like trying to restore a car with 300,000 miles. Even after repairs, it won’t play like a new one. And repairs alone would be $200-$300. Worth buying new at that point',
  },
  {
    question: 'How much do you need to raise?',
    answer:
      "I'm shooting to spend $1000. All contributions will go to the sax, and I'll cover the rest.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-8 mb-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
