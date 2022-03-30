import Image from "next/image";
import Link from "next/link";
export const HeaderTW = () => {
  return (
    <>
      {/* header itself */}
      <div className="relative mb-16 md:mb-20 xl:mx-auto xl:max-w-4xl">
        {/* div for all three elements */}
        <div className="flex flex-row border-b border-accent-1 items-center">
          {/* logo */}
          <div className="flex w-1/2 md:w-1/3 md:justify-start">
            <Link href="/" className="-m-4 md:-m-0">
              <a>
                <Image
                  src="/reducible.svg"
                  alt="logo for jesús rascón"
                  width={100}
                  height={100}
                  className="transform scale-50"
                />
              </a>
            </Link>
          </div>

          {/* navigators */}
          <div className="absolute right-0 flex md:flex-auto text-sm space-x-2 xl:space-x-4 font-medium justify-end md:text-lg w-1/2 md:w-1/3">
            <a
              href="/blog"
              className="hover:text-accent-1-lighter transition-colors"
            >
              Blog
            </a>
            <a
              href="/portfolio"
              className="hover:text-accent-1-lighter transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/curriculum"
              className="hover:text-accent-1-lighter transition-colors"
            >
              Curriculum
            </a>
            <a
              href="/about"
              className="hover:text-accent-1-lighter transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
