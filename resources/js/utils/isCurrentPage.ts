import { NavLinkType } from '@/lib/data/navLinks';

export default function isCurrentPage(
    rawPageUrl: string,
    link: NavLinkType,
): boolean {
    if (!rawPageUrl) return false;

    const linkHref = link.type === 'link' ? link.href : link.links[0]?.href;

    if (!linkHref) return false;

    return rawPageUrl !== '/' && linkHref.includes(rawPageUrl);
}
