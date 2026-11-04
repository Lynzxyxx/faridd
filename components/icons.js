import { Code2, PenTool, Layout, Monitor, FileCode, Palette, Braces, Triangle, Terminal, LayoutDashboard, Github, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const icons = { Code2, PenTool, Layout, Monitor, FileCode, Palette, Braces, Triangle, Terminal, LayoutDashboard, Github, Instagram, Linkedin, Mail, Phone, MapPin };

export function Icon({ name, size = 22 }) {
  const C = icons[name] || Code2;
  return <C size={size} strokeWidth={1.75} aria-hidden="true" />;
}
