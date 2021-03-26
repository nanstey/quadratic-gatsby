import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlay,
  faBars,
  faTimes,
  faMapMarkerAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlayIcon = makeFAIcon(faPlay);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const SoundcloudIcon = makeFAIcon(faSoundcloud);
export const CloseIcon = makeFAIcon(faTimes);
export const ChevronLeft = makeFAIcon(faChevronLeft);
export const ChevronRight = makeFAIcon(faChevronRight);
export const MapMarkerIcon = makeFAIcon(faMapMarkerAlt);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const InstagramIcon = makeFAIcon(faInstagram);
export const YoutubeIcon = makeFAIcon(faYoutube);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
