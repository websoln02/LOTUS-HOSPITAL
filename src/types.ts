/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  gujaratiTitle?: string;
  description: string;
  iconName: string;
  details: string[];
  category: 'neonatal' | 'pediatric' | 'general' | 'preventive';
}

export interface WhyChooseReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface Appointment {
  id: string;
  parentName: string;
  childName: string;
  childAge: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  checkedIn: boolean;
  notes?: string;
}

export interface WellnessProgram {
  id: string;
  title: string;
  description: string;
  ageScope: string;
  schedule: string;
  benefits: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  age: string;
  rating: number;
  highlight: string;
  comment: string;
  location: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'neonatal' | 'pediatric' | 'facility' | 'care';
  imageUrl: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'emergency' | 'nicu' | 'appointments' | 'general' | 'vaccines';
}

export interface HealthTip {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: 'newborn' | 'nutrition' | 'growth' | 'safety' | 'seasonal';
  readTime: string;
  author: string;
  date: string;
  iconName: string;
}
