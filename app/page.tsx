import Link from "next/link";
import { Users, TrendingUp, Award, ArrowRight, Calendar } from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import Image from 'next/image'

export default function Home() {
    const upcomingSeminars = [
        {
            id: 1,
            title: 'Leadership Essentials Workshop',
            description: 'A hands-on workshop to enhance leadership skills and team managements.',
            date: '2025-12-05',
            time: '10:00 AM - 2:00 PM',
            location: 'New York, NY',
        },
        {
            id: 2,
            title: 'Advanced Strategic Planning',
            description: 'Learn strategic planning techniques to drive organizational growth.',
            date: '2025-12-12',
            time: '1:00 PM - 5:00 PM',
            location: 'Chicago, IL',
        },
        {
            id: 3,
            title: 'Innovation in Leadership',
            description: 'Explore innovative approaches to leadership in the modern workplace.',
            date: '2025-12-20',
            time: '9:00 AM - 12:00 PM',
            location: 'San Francisco, CA',
        },
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: 'Annual Leadership Gala',
            description: 'Celebrate leadership excellence and network with top professionals.',
            date: '2025-11-30',
            type: 'Networking',
        },
        {
            id: 2,
            title: 'Tech & Leadership Summit',
            description: 'Join industry leaders to discuss the future of technology and management.',
            date: '2025-12-10',
            type: 'Conference',
        },
        {
            id: 3,
            title: 'End-of-Year Team Meetup',
            description: 'Reconnect with peers and celebrate the year’s achievements.',
            date: '2025-12-18',
            type: 'Social',
        },
    ];

    const recentPosts = [
        {
            id: 1,
            title: 'The Future of Leadership: Embracing Digital Transformation',
            excerpt: 'Discover how digital transformation is reshaping leadership practices and what it means for the next generation of leaders.',
            author: 'Dr. Sarah Chen',
            date: '2025-11-15',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
        },
        {
            id: 2,
            title: '5 Key Skills Every Modern Leader Needs',
            excerpt: 'Learn about the essential skills that distinguish exceptional leaders in today\'s fast-paced business environment.',
            author: 'Michael Rodriguez',
            date: '2025-11-12',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Building High-Performance Teams',
            excerpt: 'Insights on creating and maintaining teams that consistently deliver exceptional results.',
            author: 'Jessica Park',
            date: '2025-11-08',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
        },
    ];

    const stats = [
        { icon: Users, label: 'Active Members', value: '500+' },
        { icon: TrendingUp, label: 'Seminars Delivered', value: '150+' },
        { icon: Award, label: 'Years of Excellence', value: '10+' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-neutral-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
                    <div className="max-w-3xl">
                        <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
                            Welcome to DLL ELITE
                        </Badge>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            Elevating Leaders Innovatively
                        </h1>
                        <p className="text-xl sm:text-2xl text-neutral-400 mb-8">
                            Through Training and Excellence
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    Explore Seminars
                                    <ArrowRight className="ml-2" size={20} />
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-900">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat) => (
                            <Card key={stat.label} className="bg-neutral-900 border-neutral-800">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-neutral-400 mb-2">{stat.label}</p>
                                            <p className="text-4xl">{stat.value}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <stat.icon className="text-blue-400" size={24} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Seminars */}
            <section className="py-16 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl mb-2">Upcoming Seminars</h2>
                            <p className="text-neutral-400">Join our expert-led training sessions</p>
                        </div>
                        <Link href="/">
                            <Button variant="outline" className="border-neutral-700 hover:bg-neutral-900">
                                View All Seminars
                                <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingSeminars.map((seminar) => (
                            <Card key={seminar.id} className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all group cursor-pointer">
                                <CardContent className="p-6">
                                    <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                                        Upcoming
                                    </Badge>
                                    <h3 className="text-xl mb-3 group-hover:text-blue-400 transition-colors">{seminar.title}</h3>
                                    <p className="text-neutral-400 mb-4 line-clamp-2">{seminar.description}</p>
                                    <div className="space-y-2 text-sm text-neutral-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{new Date(seminar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>{seminar.time}</span>
                                            <span className="text-neutral-500">{seminar.location}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-16 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl mb-2">Upcoming Events</h2>
                            <p className="text-neutral-400">Don&#39;t miss our special events and gatherings</p>
                        </div>
                        <Link href="/">
                            <Button variant="outline" className="border-neutral-700 hover:bg-neutral-900">
                                View All Events
                                <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {upcomingEvents.map((event) => (
                            <Card key={event.id} className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                                            {event.type}
                                        </Badge>
                                        <span className="text-sm text-neutral-400">
                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl mb-3">{event.title}</h3>
                                    <p className="text-neutral-400">{event.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl mb-2">Latest Insights</h2>
                            <p className="text-neutral-400">Read our latest thoughts on leadership and development</p>
                        </div>
                        <Link href="/">
                            <Button variant="outline" className="border-neutral-700 hover:bg-neutral-900">
                                View All Posts
                                <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`}>
                                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all overflow-hidden h-full group">
                                    <div className="aspect-video overflow-hidden">
                                        <Image
                                            width={250}
                                            height={250}
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                                            <span>{post.author}</span>
                                            <span>•</span>
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                        </div>
                                        <h3 className="text-xl mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                                        <p className="text-neutral-400 line-clamp-2">{post.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
