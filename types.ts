import React from 'react';
import { translations } from './translations';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

export type Language = 'fr' | 'en' | 'ar';
export type Content = typeof translations.fr;