<template>
    <header class="sticky-header sticky top-0 z-30 shadow-md bg-white">
        <div class="header_area w-full" id="header">
            <nav class="mainmenu relative max-w-[85rem] w-full lg:mx-2 py-3 lg:justify-between px-5 lg:px-5 xl:mx-auto mt-0">
                <div class="relative lg:flex lg:items-center lg:justify-between">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex items-center">
                            <img src="../assets/logo.svg" alt="Logo" class="max-w-[5rem] lg:max-w-[9rem]" />
                        </a>
                        <div class="flex lg:hidden">
                            <button type="button" class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-medium text-primary-800 overflow-hidden" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6"></line>
                                <line x1="3" x2="21" y1="12" y2="12"></line>
                                <line x1="3" x2="21" y1="18" y2="18"></line>
                            </svg>
                            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-500 basis-full grow lg:block">
                        <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                            <div class="flex flex-col gap-x-0 divide-y divide-dashed divide-primary-200 lg:flex-row lg:items-center lg:justify-end lg:gap-x-5 lg:mt-0 lg:pl-3 lg:pr-5 lg:divide-y-0 lg:divide-solid overflow-hidden space-y-3 lg:space-y-0 md:space-y-0">
                                <a href="" target="_self" rel="nofollow" class="btn btn-two px-3 py-2 rounded-md text-black bg-white" style="border: 1px solid gray;"><i class="fa-solid fa-mobile text-primary-800 shadow-lg"></i> Go Mobile</a>

                                <a href="" target="_self" rel="nofollow" class="btn btn-two px-3 py-2 rounded-md text-white border-none border-0"><i class="fa-solid fa-user-tie"></i> My Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
