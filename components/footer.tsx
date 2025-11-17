import Link from "next/link";
import { Mail, ArrowRight } from 'lucide-react';
import { LuLinkedin, LuTwitter, LuInstagram, LuFacebook } from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export function Footer() {
    const footerLinks = {
        about: [
            { label: 'Our Mission', path: '/about' },
            { label: 'Founders', path: '/about#founders' },
            { label: 'Officers', path: '/about#officers' },
        ],
        programs: [
            { label: 'Seminars', path: '/seminars' },
            { label: 'Events', path: '/events' },
            { label: 'Blog', path: '/blog' },
        ],
        resources: [
            { label: 'Officer Portal', path: '/officer' },
            { label: 'Contact Us', path: '#' },
            { label: 'FAQ', path: '#' },
        ],
    };

    const socialLinks = [
        { icon: LuLinkedin, href: '#', label: 'LinkedIn' },
        { icon: LuTwitter, href: '#', label: 'Twitter' },
        { icon: LuInstagram, href: '#', label: 'Instagram' },
        { icon: LuFacebook, href: '#', label: 'Facebook' },
        { icon: Mail, href: 'mailto:info@dllelite.org', label: 'Email' },
    ];

    return (
        <footer className="border-t border-neutral-800 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white">DE</span>
                            </div>
                            <span className="text-white tracking-wider">DLL ELITE</span>
                        </div>
                        <p className="text-neutral-400 mb-6 max-w-sm">
                            Elevating Leaders Innovatively Through Training and Excellence
                        </p>

                        {/* Newsletter Signup */}
                        <div>
                            <p className="text-sm mb-3">Stay updated with our latest programs</p>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-neutral-900 border-neutral-800 focus:border-blue-500"
                                />
                                <Button className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                                    <ArrowRight size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* About Links */}
                    <div>
                        <h3 className="mb-4">About</h3>
                        <ul className="space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs Links */}
                    <div>
                        <h3 className="mb-4">Programs</h3>
                        <ul className="space-y-3">
                            {footerLinks.programs.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-neutral-800 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} DLL ELITE. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} className="text-neutral-400" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
