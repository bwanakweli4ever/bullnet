import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = 'BullNet | Technology Solutions & Broadband Services',
  description = 'BullNet provides end-to-end technology solutions including LAN setup, network solutions, CCTV installation, ISP consultancy, and Starlink connectivity services in Rwanda.',
  keywords = 'BullNet, technology solutions, broadband, LAN setup, network solutions, CCTV installation, ISP consultancy, Starlink, Rwanda, IT services, network security',
  image = '/images/bull-logo-d.png',
  url = '',
  type = 'website'
}: SEOProps) => {
  const location = useLocation()
  const siteUrl = 'https://bullnet.rw' // Update with your actual domain
  const currentUrl = `${siteUrl}${location.pathname}`
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'BullNet Technology Solutions')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('language', 'English')
    updateMetaTag('revisit-after', '7 days')

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', fullImageUrl, 'property')
    updateMetaTag('og:url', url || currentUrl, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', 'BullNet', 'property')
    updateMetaTag('og:locale', 'en_US', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', fullImageUrl)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url || currentUrl)

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'BullNet Technology Solutions',
      url: siteUrl,
      logo: `${siteUrl}/images/bull-logo-d.png`,
      description: description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nyarugenge YYUSSA Plaza, 1st Floor',
        addressLocality: 'Kigali',
        addressCountry: 'RW'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+250-783-611-372',
        contactType: 'Customer Service',
        email: 'bullnetltd@gmail.com',
        areaServed: 'RW',
        availableLanguage: ['English', 'Kinyarwanda', 'French']
      },
      sameAs: [
        'https://www.instagram.com/bul_Inet',
        'https://www.facebook.com/bul_Inet'
      ]
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }, [title, description, keywords, image, url, type, currentUrl, fullImageUrl, siteUrl])

  return null
}

export default SEO

