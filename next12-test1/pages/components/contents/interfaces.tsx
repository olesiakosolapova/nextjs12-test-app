export interface SidebarItem {
  name: string;
  url: string;
}

export interface SidebarData {
  items: SidebarItem[];
}

export interface ContentData {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: {
    perex: string;
    image: string;
    content: string;
    contact: {
      phone: string;
      email: string;
    };
    sidebar: SidebarData;
    heroCta: SidebarItem;
  };
}
