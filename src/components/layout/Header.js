import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as='nav' className='bg-dark'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='relative flex h-24 items-center justify-between'>
              <div className='flex items-center px-2 lg:px-0'>
                <div className='flex-shrink-0'>
                  <div className='w-44 mr-6' onClick={() => router.push('/')}>
                    <Image
                      src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
                      alt='Packaging School'
                      layout='responsive'
                      width={1163}
                      height={267}
                    />
                  </div>
                </div>
                <div className='hidden lg:ml-6 lg:block'>
                  <div className='flex space-x-4'>
                    {/* Current: "bg-zinc-900 text-white", Default: "text-zinc-300 hover:bg-zinc-700 hover:text-white" */}
                    <a
                      href='#'
                      className='rounded-md bg-zinc-700 px-3 py-2 text-sm font-medium text-white'
                    >
                      Certifications
                    </a>
                    <a
                      href='#'
                      className='rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    >
                      Courses
                    </a>
                    <a
                      href='#'
                      className='rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    >
                      Library
                    </a>
                    <a
                      href='#'
                      className='rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    >
                      Campus
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5 text-zinc-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full rounded-md border border-transparent bg-zinc-700 py-2 pl-10 pr-3 leading-5 text-zinc-300 placeholder-zinc-400 focus:border-white focus:bg-white focus:text-zinc-900 focus:outline-none focus:ring-white sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:block'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='flex-shrink-0 rounded-full bg-zinc-800 p-1 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-4 flex-shrink-0'>
                    <div>
                      <Menu.Button className='flex rounded-full bg-zinc-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-zinc-100' : '',
                                'block px-4 py-2 text-sm text-zinc-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-zinc-100' : '',
                                'block px-4 py-2 text-sm text-zinc-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-zinc-100' : '',
                                'block px-4 py-2 text-sm text-zinc-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {/* Current: "bg-zinc-900 text-white", Default: "text-zinc-300 hover:bg-zinc-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='#'
                className='block rounded-md bg-zinc-900 px-3 py-2 text-base font-medium text-white'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white'
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className='border-t border-zinc-700 pt-4 pb-3'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-zinc-400'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-zinc-800 p-1 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1 px-2'>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-700 hover:text-white'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-700 hover:text-white'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-700 hover:text-white'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
