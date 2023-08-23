export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "KSI",
  description: "Keamanan Sistem Informasi",
  leftNavs: [
    {
      title: "Mahasiswa",
      href: "/mahasiswa",
    },
    {
      title: "Profil",
      href: "/profil",
    },
  ],
  rightNavs: [
    {
      title: "Login",
      href: "/login",
    },
  ],
}
