import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faDiscord,
  faGithub
);

export interface SocialLink {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  alt: string;
  customColor?: string;
}

export const socialLinks = (lang: string): SocialLink[] => [
  {
    url: "https://facebook.com/myPoliticsTest",
    icon: faFacebookF,
    alt: "Facebook",
  },
  {
    url: "https://twitter.com/myPolitics__",
    icon: faTwitter,
    alt: "Twitter",
  },
  {
    url: "https://www.instagram.com/mypolitics_/",
    icon: faInstagram,
    alt: "Instagram",
  },
  {
    url: "https://t.me/mypoliticsofficial",
    icon: faTelegramPlane,
    alt: "Telegram",
  },
  {
    url: "https://discord.com/invite/MrcmhByAcS",
    icon: faDiscord,
    alt: "Discord",
  },
  {
    url: "http://github.com/mypolitics",
    icon: faGithub,
    alt: "GitHub",
  },
  {
    url:
      lang === "pl"
        ? "https://patronite.pl/mypolitics"
        : "https://patreon.com/mypolitics",
    icon:
      lang === "pl"
        ? '/images/patronite.png'
        : '/images/patreon.png',
    customColor: lang === "pl" ? "#ED1B2D" : "#FF424D",
    alt: lang === "pl" ? "Patronite" : "Patreon",
  },
];
