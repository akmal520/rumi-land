interface NavigationItem {
    name: string;
    href: string;
}

export const NavigationMenu: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Katalog', href: '/katalog' },
    { name: 'Contact', href: '/contact' },
];