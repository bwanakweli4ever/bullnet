import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroSlider.css'

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  backgroundImage: string
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides: SlideData[] = [
    {
      id: 1,
      title: 'BULLNET',
      subtitle: 'Technology Solutions',
      description: 'End-to-end digital infrastructure, connectivity, and security solutions for modern businesses',
      image: '/images/hero-man-laptop.png',
      backgroundImage: '/images/background/banner-v4.jpg'
    },
    {
      id: 2,
      title: 'Your Technology',
      subtitle: 'Solutions Partner',
      description: 'Reliable technology systems that power modern businesses with cutting-edge solutions',
      image: '/images/hero-man-laptop.png',
      backgroundImage: '/images/background/banner-v4.jpg'
    }
  ]

  const navigateNext = () => {
    if (isAnimating || currentSlide >= slides.length - 1) return
    setIsAnimating(true)
    setCurrentSlide(prev => prev + 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const navigatePrev = () => {
    if (isAnimating || currentSlide <= 0) return
    setIsAnimating(true)
    setCurrentSlide(prev => prev - 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide(prev => (prev >= slides.length - 1 ? 0 : prev + 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating, slides.length])

  return (
    <div className="hero-slider-wrapper">
      <div className="hero-slider-container">
        {/* Navigation Buttons */}
        <button
          className={`slider-nav prev ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={navigatePrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 32 32" width="24" height="24">
            <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" fill="currentColor" />
          </svg>
        </button>

        <button
          className={`slider-nav next ${currentSlide >= slides.length - 1 ? 'disabled' : ''}`}
          onClick={navigateNext}
          disabled={currentSlide >= slides.length - 1}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 32 32" width="24" height="24">
            <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" fill="currentColor" />
          </svg>
        </button>

        {/* Slides */}
        <div className="slider-content">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              <div className="slide-background">
                <img src={slide.backgroundImage} alt={`${slide.title} - ${slide.subtitle} background`} className="slide-bg-image" />
                <div className="slide-overlay"></div>
              </div>

              <div className="slide-content">
                <div className="slide-left">
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                </div>

                <div className="slide-right">
                  <h1 className="slide-title">
                    {slide.title} <br />
                    <span className="slide-subtitle">{slide.subtitle}</span>
                  </h1>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-actions">
                    <Link to="/contact" className="btn-primary">
                      Get Started
                    </Link>
                    <Link to="/services" className="btn-secondary">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
