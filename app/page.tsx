import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* The main container is a flex container that takes up the entire height of the screen and is arranged in a column */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* The logo container is a flex container that has a height of 20 and is aligned at the bottom. It has a rounded border and a blue background */}
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* The content container is a flex container that has a margin-top of 4 and grows to fill the available space. It is arranged in a column and has a gap of 4 between its children. On medium screens and above, it is arranged in a row */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* The text container is a flex container that has a gap of 6 between its children. It has a rounded border, a gray background, and padding on the x and y axes. On medium screens and above, it takes up 2/5 of the width and has increased padding on the x-axis */}
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          {/* The decorative element is a div with a height and width of 0. It has a border that creates a triangle shape */}
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            {/* The text has the Lusitana font applied to it. It has a font size of xl on small screens and 3xl on medium screens and above. It has a gray color and normal line height */}
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              {/* The link has a blue color */}
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            {/* The login button is a flex container that has a gap of 5 between its children. It is aligned to the start and has a rounded border, a blue background, and padding on the x and y axes. It has a small font size, medium font weight, and white text color. On hover, the background color transitions to a lighter shade of blue */}
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* The image container is a flex container that has padding on all sides. On medium screens and above, it takes up 3/5 of the width and has increased padding on the x and y axes */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          {/* The image container is a flex container that has padding on all sides. On small screens, it is displayed as a block */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
    </main>
  );
}
