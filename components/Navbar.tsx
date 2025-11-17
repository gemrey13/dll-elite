"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Lock } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const isOfficerArea = pathname.startsWith("/officer")

    const publicLinks = [
        { path: "/", label: "Home" },
        { path: "/seminars", label: "Seminars" },
        { path: "/events", label: "Events" },
        { path: "/blog", label: "Blog" },
        { path: "/about", label: "About" }
    ]

    const officerLinks = [
        { path: "/officer", label: "Dashboard" },
        { path: "/officer/seminars", label: "Manage Seminars" },
        { path: "/officer/events", label: "Manage Events" },
        { path: "/officer/blog", label: "Manage Blog" }
    ]

    const navLinks = isOfficerArea ? officerLinks : publicLinks

    return (
        <nav className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white">DE</span>
                        </div>
                        <span className="text-white tracking-wider">DLL ELITE</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`px-4 py-2 rounded-lg transition-all ${
                                    pathname === link.path
                                        ? "bg-neutral-800 text-white"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {!isOfficerArea && (
                            <Link href="/">
                                <Button size="sm" variant="outline" className="ml-2 border-neutral-700 hover:bg-neutral-900">
                                    <Lock size={16} className="mr-2" />
                                    Officer Portal
                                </Button>
                            </Link>
                        )}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg transition-all ${
                                    pathname === link.path
                                        ? "bg-neutral-800 text-white"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {!isOfficerArea && (
                            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                <Button size="sm" variant="outline" className="w-full border-neutral-700 hover:bg-neutral-900">
                                    <Lock size={16} className="mr-2" />
                                    Officer Portal
                                </Button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}
