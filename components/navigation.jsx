import Link from 'next/link'
import { useEffect, useState } from 'react';

const NAVITEMS = [
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "About me",
    link: "/about"
  }
]

export default function navigation() {

  const [mobileMenu, setMobileMenu] = useState(false)

  
  return (
    <nav className="bg-blue-300 text-white">
      <div className="container mx-auto sm:h-12 flex sm:flex-wrap justify-between items-center">
        <div className="w-full px-2 sm:px-0 sm:w-auto py-4 sm:py-2 flex justify-between">
          <svg
            className="h-5"
            viewBox="0 0 303.88 30.971"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="a">
                <stop stop-color="#4299e1" offset="0"></stop>
                <stop stop-color="#4299e1" offset="1"></stop>
              </linearGradient>
            </defs>
            <g
              transform="translate(69.134)"
              data-name="4a80dd14-406a-4748-9be0-603364c3eafa"
            >
              <path
                transform="translate(-.205 -3.187)"
                d="m14.678 5.879v14.821a12.488 12.488 0 0 1-0.368 3.083 6.6 6.6 0 0 1-1.289 2.531 6.181 6.181 0 0 1-2.485 1.7 10.818 10.818 0 0 1-3.958 0.621 11.978 11.978 0 0 1-3.778-0.529 10.531 10.531 0 0 1-2.6-1.242l1.68-3.889a12.732 12.732 0 0 0 2 0.966 6.26 6.26 0 0 0 2.3 0.414 3.4 3.4 0 0 0 2.646-0.9 4.532 4.532 0 0 0 0.805-3.037v-14.539zm10.975 18.96q0.713 0 1.358-0.023 0.644-0.046 1.035-0.092v-3.659q-0.3-0.046-0.874-0.115a8.934 8.934 0 0 0-1.058-0.069 11.269 11.269 0 0 0-1.289 0.069 3.286 3.286 0 0 0-1.035 0.322 1.842 1.842 0 0 0-0.713 0.6 1.743 1.743 0 0 0-0.253 0.966 1.65 1.65 0 0 0 0.759 1.565 4.156 4.156 0 0 0 2.07 0.436zm-0.391-14.039a11.037 11.037 0 0 1 3.543 0.483 5.505 5.505 0 0 1 2.278 1.381 4.991 4.991 0 0 1 1.2 2.186 10.459 10.459 0 0 1 0.368 2.876v9.986q-1.035 0.23-2.876 0.529a28.192 28.192 0 0 1-4.441 0.3 14.689 14.689 0 0 1-2.968-0.276 6.511 6.511 0 0 1-2.324-0.966 4.139 4.139 0 0 1-1.473-1.726 6 6 0 0 1-0.506-2.6 4.935 4.935 0 0 1 0.6-2.508 4.447 4.447 0 0 1 1.588-1.657 7.34 7.34 0 0 1 2.278-0.874 12.705 12.705 0 0 1 2.669-0.276q0.943 0 1.68 0.069a7.553 7.553 0 0 1 1.173 0.23v-0.457a2.6 2.6 0 0 0-0.759-1.956 3.519 3.519 0 0 0-2.577-0.759 15.865 15.865 0 0 0-2.416 0.184 10.8 10.8 0 0 0-2.048 0.506l-0.621-3.866a10.2 10.2 0 0 1 1.058-0.276q0.621-0.138 1.358-0.253 0.736-0.115 1.565-0.207 0.823-0.073 1.651-0.073zm16.59 13.944a4.77 4.77 0 0 0 1.864-0.253 1 1 0 0 0 0.552-1.012 1.226 1.226 0 0 0-0.713-1.012 11.794 11.794 0 0 0-2.14-0.966q-1.127-0.437-2.048-0.874a6.276 6.276 0 0 1-1.567-1.08 4.447 4.447 0 0 1-1.012-1.5 5.7 5.7 0 0 1-0.345-2.094 4.525 4.525 0 0 1 1.772-3.774 7.709 7.709 0 0 1 4.856-1.379 15.358 15.358 0 0 1 2.968 0.276 13.574 13.574 0 0 1 2.255 0.6l-0.828 3.728a14.9 14.9 0 0 0-1.818-0.506 9.77 9.77 0 0 0-2.209-0.23q-2.255 0-2.255 1.243a1.417 1.417 0 0 0 0.092 0.529 1.025 1.025 0 0 0 0.391 0.437 4.308 4.308 0 0 0 0.782 0.437 12.223 12.223 0 0 0 1.266 0.529 22.663 22.663 0 0 1 2.623 1.15 6.134 6.134 0 0 1 1.611 1.219 3.977 3.977 0 0 1 0.851 1.473 6.807 6.807 0 0 1 0.23 1.864 4.319 4.319 0 0 1-1.864 3.8 9.4 9.4 0 0 1-5.338 1.289 16.027 16.027 0 0 1-3.751-0.368 17.441 17.441 0 0 1-2.094-0.644l0.805-3.912a16.528 16.528 0 0 0 2.531 0.759 12.058 12.058 0 0 0 2.533 0.274zm21.629-4.9a5.716 5.716 0 0 0-1.013-3.544 3.434 3.434 0 0 0-2.968-1.355q-0.644 0-1.173 0.046l-0.92 0.115v8.674a3.963 3.963 0 0 0 1.2 0.483 5.778 5.778 0 0 0 1.45 0.184q3.423 1e-3 3.423-4.601zm4.878-0.115a12.38 12.38 0 0 1-0.483 3.566 8.084 8.084 0 0 1-1.4 2.761 6.428 6.428 0 0 1-2.324 1.818 7.488 7.488 0 0 1-3.2 0.644 8.069 8.069 0 0 1-1.864-0.207 8.915 8.915 0 0 1-1.68-0.529v6.374h-4.788v-22.317q0.644-0.207 1.473-0.391 0.851-0.161 1.749-0.3 0.92-0.115 1.887-0.207 0.943-0.069 1.818-0.069a10.435 10.435 0 0 1 3.728 0.621 7.54 7.54 0 0 1 2.784 1.772 7.451 7.451 0 0 1 1.7 2.784 10.652 10.652 0 0 1 0.599 3.682zm2.9 0.115a10.3 10.3 0 0 1 0.69-3.935 8.7 8.7 0 0 1 1.841-2.83 7.553 7.553 0 0 1 2.577-1.7 8.218 8.218 0 0 1 3.013-0.579 7.487 7.487 0 0 1 5.706 2.209q2.094 2.212 2.094 6.491 0 0.414-0.023 0.92-0.046 0.483-0.069 0.874h-10.888a3.147 3.147 0 0 0 1.381 2.347 5.541 5.541 0 0 0 3.29 0.874 14.377 14.377 0 0 0 2.577-0.23 10.636 10.636 0 0 0 2.094-0.6l0.644 3.889a5.475 5.475 0 0 1-1.035 0.391q-0.644 0.184-1.427 0.345-0.805 0.138-1.7 0.23a17.579 17.579 0 0 1-1.795 0.092 10.76 10.76 0 0 1-3.981-0.667 7.445 7.445 0 0 1-2.805-1.865 7.6 7.6 0 0 1-1.657-2.784 11.066 11.066 0 0 1-0.528-3.47zm4.941-1.839h6.328a4.386 4.386 0 0 0-0.207-1.173 2.5 2.5 0 0 0-0.552-1.035 2.717 2.717 0 0 0-0.92-0.736 3.013 3.013 0 0 0-1.4-0.3 3.166 3.166 0 0 0-1.381 0.276 3.048 3.048 0 0 0-0.966 0.713 3.267 3.267 0 0 0-0.6 1.058 6.828 6.828 0 0 0-0.3 1.2zm25.7-6.466-0.8 3.961q-0.644-0.161-1.519-0.345a10.284 10.284 0 0 0-1.864-0.161 9.964 9.964 0 0 0-1.081 0.069 7.883 7.883 0 0 0-0.943 0.184v12.953h-4.809v-16.039a26 26 0 0 1 3.037-0.851 17.2 17.2 0 0 1 3.912-0.414q0.391 0 0.943 0.046t1.1 0.138q0.529 0.069 1.081 0.184a5.387 5.387 0 0 1 0.943 0.276zm16.7 12.816a7.05 7.05 0 0 0 1.772-0.184 3.072 3.072 0 0 0 1.1-0.46 1.733 1.733 0 0 0 0.575-0.736 2.588 2.588 0 0 0 0.161-0.943 2.173 2.173 0 0 0-1.035-1.818 14.93 14.93 0 0 0-3.543-1.565 23.171 23.171 0 0 1-2.186-0.874 8.388 8.388 0 0 1-1.944-1.265 6.056 6.056 0 0 1-1.427-1.841 5.626 5.626 0 0 1-0.552-2.623 6.335 6.335 0 0 1 0.6-2.784 5.751 5.751 0 0 1 1.634-2.094 7.626 7.626 0 0 1 2.577-1.358 11.724 11.724 0 0 1 3.405-0.46 14.053 14.053 0 0 1 3.912 0.483 14.06 14.06 0 0 1 2.692 1.058l-1.45 3.981a14.5 14.5 0 0 0-2.07-0.872 9.118 9.118 0 0 0-2.761-0.368 4.931 4.931 0 0 0-2.577 0.506 1.7 1.7 0 0 0-0.805 1.542 1.683 1.683 0 0 0 0.3 1.012 2.653 2.653 0 0 0 0.828 0.759 6.963 6.963 0 0 0 1.219 0.621q0.69 0.276 1.519 0.552a30.177 30.177 0 0 1 3.037 1.289 8.051 8.051 0 0 1 2.14 1.45 5.4 5.4 0 0 1 1.266 1.979 7.592 7.592 0 0 1 0.437 2.738 5.743 5.743 0 0 1-2.209 4.832q-2.186 1.726-6.6 1.726a20.123 20.123 0 0 1-2.669-0.161 18.87 18.87 0 0 1-2.117-0.437 11.447 11.447 0 0 1-1.565-0.552 12.254 12.254 0 0 1-1.1-0.552l1.4-3.981a14.211 14.211 0 0 0 2.462 0.966 12.753 12.753 0 0 0 3.585 0.435zm12.195-3.083v-14.242l4.786-0.782v4.992h5.775v4h-5.775v5.96a4.742 4.742 0 0 0 0.529 2.416 2.28 2.28 0 0 0 2.14 0.9 9.792 9.792 0 0 0 1.611-0.138 7.37 7.37 0 0 0 1.5-0.414l0.667 3.751a14.376 14.376 0 0 1-1.933 0.6 10.462 10.462 0 0 1-2.6 0.276 8.342 8.342 0 0 1-3.267-0.552 5 5 0 0 1-2.048-1.473 5.339 5.339 0 0 1-1.081-2.3 13.917 13.917 0 0 1-0.3-2.991zm30.3-1.588a11.092 11.092 0 0 1-0.575 3.658 7.8 7.8 0 0 1-1.68 2.83 7.674 7.674 0 0 1-2.623 1.818 8.809 8.809 0 0 1-3.428 0.644 8.747 8.747 0 0 1-3.405-0.644 7.674 7.674 0 0 1-2.623-1.818 8.069 8.069 0 0 1-1.7-2.83 10.346 10.346 0 0 1-0.621-3.658 9.833 9.833 0 0 1 0.644-3.635 8.4 8.4 0 0 1 1.726-2.807 7.776 7.776 0 0 1 2.646-1.795 8.456 8.456 0 0 1 3.344-0.647 8.517 8.517 0 0 1 3.359 0.644 7.536 7.536 0 0 1 2.623 1.795 8.107 8.107 0 0 1 1.7 2.807 10.158 10.158 0 0 1 0.627 3.639zm-4.9 0a6.147 6.147 0 0 0-0.874-3.5 2.922 2.922 0 0 0-2.531-1.266 2.944 2.944 0 0 0-2.554 1.266 6.026 6.026 0 0 0-0.9 3.5 6.071 6.071 0 0 0 0.9 3.52 2.912 2.912 0 0 0 2.554 1.312 2.891 2.891 0 0 0 2.531-1.312 6.194 6.194 0 0 0 0.887-3.519zm16.038 4.878-0.667 3.958a12.493 12.493 0 0 1-3.405-0.46 5 5 0 0 1-2.048-1.173 3.924 3.924 0 0 1-1.035-1.841 9.773 9.773 0 0 1-0.276-2.416v-18.661l4.809-0.782v18.477a6.474 6.474 0 0 0 0.092 1.15 2.042 2.042 0 0 0 0.368 0.874 2.08 2.08 0 0 0 0.782 0.575 4.407 4.407 0 0 0 1.381 0.3zm13.046-6.1q-0.644 2.439-1.358 4.855-0.736 2.416-1.542 4.878h-3.728q-0.575-1.358-1.266-3.221-0.667-1.864-1.381-4.073-0.736-2.209-1.5-4.671-0.759-2.462-1.473-4.993h5.062q0.253 1.173 0.575 2.531 0.3 1.381 0.644 2.83 0.322 1.45 0.713 2.922 0.368 1.45 0.736 2.807 0.437-1.427 0.828-2.9 0.414-1.473 0.782-2.922l0.713-2.761q0.322-1.335 0.575-2.508h3.5q0.253 1.173 0.575 2.508t0.667 2.761q0.368 1.45 0.736 2.922 0.391 1.473 0.805 2.9 0.391-1.358 0.782-2.807 0.391-1.473 0.736-2.922 0.322-1.45 0.644-2.83 0.3-1.358 0.552-2.531h4.993q-0.713 2.531-1.473 4.993-0.759 2.462-1.473 4.671-0.736 2.209-1.427 4.073-0.69 1.864-1.266 3.221h-3.728q-0.805-2.462-1.588-4.878-0.758-2.417-1.402-4.852zm19.765-7.225v16.963h-4.809v-16.96zm0.437-4.878a2.634 2.634 0 0 1-0.851 2.071 2.91 2.91 0 0 1-2 0.759 2.94 2.94 0 0 1-2.025-0.759 2.634 2.634 0 0 1-0.851-2.071 2.662 2.662 0 0 1 0.851-2.094 2.94 2.94 0 0 1 2.025-0.759 2.91 2.91 0 0 1 2 0.759 2.662 2.662 0 0 1 0.864 2.097zm2.485 27.8q-0.46 0-1.335-0.092a8.755 8.755 0 0 1-1.657-0.368l0.644-3.889a6.215 6.215 0 0 0 0.874 0.23 9.384 9.384 0 0 0 1.012 0.046 1.791 1.791 0 0 0 1.588-0.667 3.443 3.443 0 0 0 0.46-1.956v-16.223h4.786v16.337a6.712 6.712 0 0 1-1.634 4.97 6.523 6.523 0 0 1-4.725 1.611zm6.834-27.8a2.634 2.634 0 0 1-0.851 2.071 2.94 2.94 0 0 1-2.025 0.759 2.911 2.911 0 0 1-2-0.759 2.634 2.634 0 0 1-0.851-2.071 2.662 2.662 0 0 1 0.851-2.094 2.911 2.911 0 0 1 2-0.759 2.94 2.94 0 0 1 2.025 0.759 2.662 2.662 0 0 1 0.864 2.097zm8.859-3.175v14.177q0.713-0.759 1.473-1.611 0.736-0.828 1.45-1.657 0.713-0.805 1.335-1.565 0.644-0.736 1.081-1.289h5.706q-1.7 1.979-3.336 3.751-1.634 1.795-3.566 3.7a23.764 23.764 0 0 1 2 2.071q1.035 1.219 2 2.508 0.966 1.289 1.772 2.577 0.805 1.289 1.358 2.347h-5.522q-0.506-0.851-1.173-1.864-0.644-1.012-1.4-2.025-0.736-1.012-1.542-1.956a13.937 13.937 0 0 0-1.634-1.565v7.417h-4.809v-24.231z"
                fill="#fff"
                data-name="Path 1"
              ></path>
            </g>
            <g
              transform="translate(0 .049)"
              data-name="27f66465-3942-4643-a75a-64af78b716f3"
            >
              <path
                transform="translate(-3.214 -17.379)"
                d="M46.013,45.378a1.656,1.656,0,0,1-1.265-2.724l9.517-11.275L44.749,20.1a1.656,1.656,0,1,1,2.531-2.136L57.7,30.311a1.655,1.655,0,0,1,0,2.136L47.279,44.79a1.651,1.651,0,0,1-1.266.588Zm-30.723,0a1.652,1.652,0,0,1-1.266-.588L3.6,32.447a1.655,1.655,0,0,1,0-2.136L14.023,17.968A1.656,1.656,0,1,1,16.554,20.1L7.036,31.38l9.517,11.275a1.656,1.656,0,0,1-1.264,2.724Zm7.634,0a1.655,1.655,0,0,1-1.4-2.534L36.974,18.158a1.656,1.656,0,0,1,2.807,1.757L24.328,44.6A1.655,1.655,0,0,1,22.923,45.378Z"
                fill="url(#a)"
                data-name="Path 2"
              ></path>
            </g>
          </svg>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
            <svg className="w-6 h-6" onClick={() => {setMobileMenu(!mobileMenu)}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>

  
        
        <div className="hidden sm:flex h-full w-full sm:w-auto space-x-2 items-center">
          {NAVITEMS && (NAVITEMS.map((item) => {
            return (
              <Link href={item.link} key={item.name} className="py-4 w-full px-2 sm:w-auto border-t sm:border-0 sm:py-0 text-lg sm:text-base px-2 h-full flex items-center hover:bg-blue-400" >
              {item.name}
              </Link>
            )              
          }))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
          <div className="sm:hidden w-full">
              {NAVITEMS && (NAVITEMS.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
               <div className="py-3 w-full px-2 sm:w-auto border-t text-lg px-2 h-full flex items-center" >{item.name}</div>
              </Link>
            )              
          }))}
          </div>
        )}
    </nav>

  );
}