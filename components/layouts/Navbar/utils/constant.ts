interface NavigationItem {
    name: string;
    href: string;
}

export const NavigationMenu: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Jasa Kami', href: '/jasa-kami' },
    { name: 'Kontak', href: '/kontak' },
];