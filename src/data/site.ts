import { Link2, Mail } from "lucide-react";
import profilePic from "../assets/profile-pic.avif";
import { siGithub, siInstagram } from "simple-icons";
import type { Social } from "./types";

export const site = {
  name: "Anggi Widantara",
  // Nama pendek yang tampil di header.
  handle: "AnggiWdntr",
  email: "widiantara2906@gmail.com",
  github: "anggiwdntr29",
  // Di-import (bukan path string) supaya Vite menangani hash
  // dan base path GitHub Pages.
  photo: profilePic,
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/anggiwdntr29",
    icon: siGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anggiwidiantara/",
    icon: Link2,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/anggiwdntr_",
    icon: siInstagram,
  },
  { label: "Email", href: "mailto:widiantara2906@gmail.com", icon: Mail },
];
