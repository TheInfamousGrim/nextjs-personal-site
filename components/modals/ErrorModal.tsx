// Dependencies
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

// Components
import { Button } from '../Button';

type ErrorModalTypes = {
  errorOpen: boolean;
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
};

export default function ErrorModal({
  errorOpen,
  setErrorOpen,
  errorMessage,
}: ErrorModalTypes) {
  return (
    <Transition.Root show={errorOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setErrorOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      😭 An error occurred sending your email 😭
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {`${errorMessage}`}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please feel free to contact me directly through my
                        email: finchergeorge1@gmail.com. Or DM me through
                        either, twitter, linkedin or discord.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <Button
                    type="button"
                    className="inline-flex w-full justify-center"
                    variant="primary"
                    onClick={() => setErrorOpen(false)}
                    text="Back to Contact"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
