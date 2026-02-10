import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <footer className="bg-white dark:bg-[#0a090f] pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">shield_person</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                                AccessOne
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                            Empowering everyone with the tools to navigate and interact with the world safely through advanced artificial intelligence.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Product
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/features" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Roadmap
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Resources
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Newsletter
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Stay updated with our latest releases and accessibility news.
                        </p>
                        <form className="space-y-3" onSubmit={handleSubscribe}>
                            <input
                                className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                                placeholder="Email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary py-3 rounded-lg text-white font-bold text-sm hover:bg-primary/90 transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © AccessOne AI 2026. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Cookie Settings
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                        <span className="material-symbols-outlined text-base">language</span>
                        <span>English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
