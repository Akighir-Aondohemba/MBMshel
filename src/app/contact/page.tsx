'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MapPin, Phone, Mail } from 'lucide-react';

// TypeScript Interface for Form Data
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Contact Page Component
const ContactPage: FC = () => {
  // Form handling with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Form submission handler (mock for backend API)
  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      // Placeholder: Replace with actual API (e.g., /api/contact)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setFormStatus('success');
      reset();
      setTimeout(() => setFormStatus('idle'), 5000); // Reset status after 5s
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-[#1e3c72] text-white py-24 sm:py-32"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/footerimage.jpg"
            alt="Mshel Blocks & Machineries contact overview"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3c72]/70" /> {/* Overlay for contrast */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Connect with Mshel Blocks & Machineries
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Reach out to our team for expert guidance and support on your construction needs. We're here to help build your vision with precision and reliability.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3c72] mb-6">
                Send Us a Message
              </h2>
              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
                  Message sent successfully! We'll respond shortly.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
                  An error occurred. Please try again.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e89e1c] focus:outline-none transition-colors duration-200"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e89e1c] focus:outline-none transition-colors duration-200"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e89e1c] focus:outline-none transition-colors duration-200"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e89e1c] focus:outline-none transition-colors duration-200"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e89e1c] focus:outline-none transition-colors duration-200 resize-y"
                    rows={4}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-base font-medium bg-[#1e3c72] text-white rounded-md hover:bg-[#e89e1c] focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3c72] mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-[#e89e1c]" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Address</p>
                      <p className="text-base text-gray-600">The Mshel Hub, No. 2 Julius Adelusi Street, Guzape, Abuja.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-[#e89e1c]" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <a
                        href="tel:+2348104444229"
                        className="text-base text-gray-600 hover:text-[#e89e1c] transition-colors duration-200"
                      >
                        +234-810-444-4229
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-[#e89e1c]" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <a
                        href="mailto:info@mshelgroup.com"
                        className="text-base text-gray-600 hover:text-[#e89e1c] transition-colors duration-200"
                      >
                        info@mshelgroup.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Static Map */}
              <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/map-placeholder.jpg"
                  alt="Map of Mshel Blocks & Machineries location"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <MapPin className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;