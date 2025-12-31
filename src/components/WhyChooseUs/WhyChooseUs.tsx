import { useState, useEffect, useRef } from 'react'
import './WhyChooseUs.css'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const dotCircleRef = useRef<HTMLDivElement>(null)

  const features: Feature[] = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of expertise in networking, security, and IT infrastructure to deliver solutions that work.',
      icon: 'fa fa-users',
    },
    {
      id: 2,
      title: '24/7 Support',
      description: 'Round-the-clock technical support ensures your systems stay online and your business keeps running smoothly.',
      icon: 'fa fa-headphones',
    },
    {
      id: 3,
      title: 'Quality Service',
      description: 'We use only premium equipment and follow industry best practices to ensure reliable, long-lasting solutions.',
      icon: 'fa fa-star',
    },
    {
      id: 4,
      title: 'Fast Deployment',
      description: 'Quick turnaround times without compromising quality. We get your systems up and running efficiently.',
      icon: 'fa fa-rocket',
    },
    {
      id: 5,
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent costs. We help you get the best value for your technology investment.',
      icon: 'fa fa-dollar',
    },
    {
      id: 6,
      title: 'Proven Track Record',
      description: 'Trusted by businesses across Rwanda. Our portfolio speaks to our commitment to excellence.',
      icon: 'fa fa-trophy',
    },
  ]

  useEffect(() => {
    if (!containerRef.current || !dotCircleRef.current) return

    const radius = containerRef.current.offsetWidth / 2.5
    const fields = dotCircleRef.current.querySelectorAll('.itemDot')
    const container = dotCircleRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    let angle = 0
    const step = (2 * Math.PI) / fields.length

    fields.forEach((field) => {
      const element = field as HTMLElement
      const x = Math.round(width / 2 + radius * Math.cos(angle) - element.offsetWidth / 2)
      const y = Math.round(height / 2 + radius * Math.sin(angle) - element.offsetHeight / 2)

      element.style.left = x + 'px'
      element.style.top = y + 'px'
      angle += step
    })
  }, [])

  useEffect(() => {
    if (!dotCircleRef.current) return

    const rotation = 360 - (activeTab - 1) * 60
    const itemRotation = (activeTab - 1) * 60

    if (dotCircleRef.current) {
      dotCircleRef.current.style.transform = `rotate(${rotation}deg)`
      dotCircleRef.current.style.transition = '2s'
    }

    const items = dotCircleRef.current.querySelectorAll('.itemDot')
    items.forEach((item) => {
      const element = item as HTMLElement
      element.style.transform = `rotate(${itemRotation}deg)`
      element.style.transition = '1s'
    })
  }, [activeTab])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev >= features.length ? 1 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, features.length])

  const handleDotClick = (tabId: number) => {
    setActiveTab(tabId)
    setIsAutoPlaying(false)
  }

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="sec-title-v4 text-center mb-2">
              <span className="sub-title">WHY CHOOSE US</span>
              <h2>What Makes BullNet Different</h2>
              <p>Experience the difference with our comprehensive technology solutions</p>
            </div>

            <div className="holderCircle" ref={containerRef}>
              <div className="round"></div>
              <div className="dotCircle" ref={dotCircleRef}>
                {features.map((feature) => (
                  <span
                    key={feature.id}
                    className={`itemDot itemDot${feature.id} ${activeTab === feature.id ? 'active' : ''}`}
                    data-tab={feature.id}
                    onClick={() => handleDotClick(feature.id)}
                  >
                    <i className={feature.icon}></i>
                    <span className="forActive"></span>
                  </span>
                ))}
              </div>
              <div className="contentCircle">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`CirItem title-box CirItem${feature.id} ${activeTab === feature.id ? 'active' : ''}`}
                  >
                    <h2 className="title">
                      <span>{feature.title}</span>
                    </h2>
                    <p>{feature.description}</p>
                    <i className={feature.icon}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

