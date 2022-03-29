import {
  faYoutube,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

//bug correction
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-800 mt-32">
      <div className="py-8 space-y-9 md:space-y-0 md:py-10 flex flex-col md:flex-row items-center">
        <Link href="/">
          <a className="text-2xl mb-2 md:my-0 md:w-2/6 font-bold tracking-tighter leading-tight text-left hover:text-accent-1 transition-colors">
            <h3>Reducible</h3>
          </a>
        </Link>

        <div className="flex flex-row justify-center space-x-8 xl:space-x-5 items-center my-2 md:my-0 md:w-2/6">
          <Link href="https://www.youtube.com/c/Reducible">
            <a>
              <FontAwesomeIcon
                icon={faYoutube}
                className="transform scale-150 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://www.twitter.com/Reducible20">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="transform scale-150 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>

          <Link href="https://github.com/nipunramk/Reducible">
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                className="transform scale-150 hover:text-accent-1 transition-colors"
              />
            </a>
          </Link>
        </div>
        <h4 className="text-xl md:text-3xl my-3 md:w-2/6 md:my-0 font-bold tracking-tighter text-right">
          {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
}
