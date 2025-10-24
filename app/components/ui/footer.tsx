export default function Footer() {
    const socialLinks = [
        { name: "Facebook", href: "https://facebook.com" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Instagram", href: "https://instagram.com" },
    ];

    return (
        <footer className="bg-gray-800 text-white ">
            <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
                <p>© 2025 MyWebsite. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
