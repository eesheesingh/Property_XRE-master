"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
export default function AppPopup(props) {
    const [open, setOpen] = useState(true)
    const { showPopup, title, setShowPopup, buttonTitle, onButtonClick } = props
    return (
        <Transition.Root show={showPopup ? showPopup : false} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setShowPopup?.(false)}>
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
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-4 flex flex-col justify-center items-center">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            {title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {buttonTitle && (
                                    <div className="mt-5 sm:mt-6 ">
                                        <button
                                            type="button"
                                            className="inline-flex w-auto justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => onButtonClick?.(false)}
                                        >
                                            {buttonTitle}
                                        </button>
                                    </div>
                                )}

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
